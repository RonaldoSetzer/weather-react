import { call, put, all, takeLatest } from 'redux-saga/effects';
import { updateWeather, resetWeather } from './actions';
import Types from './ActionTypes';

import { getWeather } from '../../../services/openWeatherAPI';

function* requestWeather({ city }) {
  yield put(resetWeather());
  try {
    const payload = yield call(getWeather, city);

    if (payload) {
      yield put(updateWeather(payload));
    }
  } catch (err) {
    yield put(resetWeather());
  }
}

export default all([takeLatest(Types.WEATHER_REQUEST, requestWeather)]);
