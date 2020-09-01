import { call, put, all, takeLatest } from 'redux-saga/effects';
import { updateWeather } from './actions';

import { getWeather } from '../../../services/openWeatherAPI';

function* requestWeather({ city }) {
  const payload = yield call(getWeather, city);

  if (payload) {
    yield put(updateWeather(payload));
  }
}

export default all([takeLatest('@weather/REQUEST', requestWeather)]);

