import { call, put, all, takeLatest } from 'redux-saga/effects';
import { requestWeather, updateWeather } from './actions';

import { getForecast } from '../../../services/openWeatherAPI';

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function extractTemperature({ main: { temp } }) {
  return { celsius: temp, fahrenheit: convertToF(temp) };
}

function* requestForecast({ city }) {
  const payload = yield call(getForecast, city);

  if (payload) {
    yield put(updateWeather(payload));
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
