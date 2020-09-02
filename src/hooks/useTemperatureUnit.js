import { useState, useeffect } from 'react';

function useTemperatureUnit() {
  const [unit, setUnit] = useState('celsius');
  const dictionary = { celsius: 'fahrenheit', fahrenheit: 'celsius' };

  function toggleUnit() {
    setUnit(dictionary[unit]);
  }

  return { unit, toggleUnit };
}

export default useTemperatureUnit;
