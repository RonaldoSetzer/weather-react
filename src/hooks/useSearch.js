import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestForecast } from '../store/modules/forecast/actions';
import { requestWeather } from '../store/modules/weather/actions';

function useSearch(query) {
  const dispatch = useDispatch();

  function search(query) {
    if (query) {
      dispatch(requestWeather(query));
      dispatch(requestForecast(query));
    }
  }

  useEffect(() => {
    search(query);
  }, [query]);

  return { search };
}

export default useSearch;
