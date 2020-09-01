import { call, put, all, takeLatest } from 'redux-saga/effects';
import { updateForecast } from './actions';

import { getForecast } from '../../../services/openWeatherAPI';

function* requestForecast({ city }) {
  const payload = yield call(getForecast, city);

  if (payload) {
    yield put(updateForecast(payload));
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
