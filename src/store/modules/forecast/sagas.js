import { call, put, all, takeLatest } from 'redux-saga/effects';
import { updateForecast, resetForecast } from './actions';

import { getForecast } from '../../../services/openWeatherAPI';

function* requestForecast({ city }) {
  try {
    const payload = yield call(getForecast, city);

    if (payload) {
      yield put(updateForecast(payload));
    }
  } catch (err) {
    yield put(resetForecast());
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
