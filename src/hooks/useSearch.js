import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestForecast } from '../store/modules/forecast/actions';
import { requestWeather } from '../store/modules/weather/actions';

function useSearch(value) {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  function search(value) {
    if (value) {
      dispatch(requestWeather(value));
      dispatch(requestForecast(value));
    }
  }

  useEffect(() => {
    if (value) {
      setQuery(value);
    }
  }, [value]);

  useEffect(() => {
    search(query);
  }, [query]);

  return { search: setQuery, query };
}

export default useSearch;
