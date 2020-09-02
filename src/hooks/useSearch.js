import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestForecast } from '../store/modules/forecast/actions';
import { requestWeather } from '../store/modules/weather/actions';

function useSearch() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (search) {
      dispatch(requestWeather(search));
      dispatch(requestForecast(search));
    }
  }, [search]);

  return { search: setSearch };
}

export default useSearch;
