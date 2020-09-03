import { useState, useEffect } from 'react';
import { getLocale } from '../services/openCageAPI';

function useGeolocation() {
  const [coords, setCoords] = useState();
  const [locale, setLocale] = useState();

  useEffect(() => {
    if (!coords) return;

    const { latitude, longitude } = coords;
    getLocale(latitude, longitude).then(setLocale);
  }, [coords]);

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(({ coords }) =>
      setCoords(coords),
    );
  }, []);

  return {
    latitude: coords?.latitude,
    longitude: coords?.longitude,
    city: locale?.city,
    state: locale?.state,
    address: locale?.address,
  };
}

export default useGeolocation;
