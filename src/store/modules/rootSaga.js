import { all } from 'redux-saga/effects';

import forecast from './forecast/sagas';
import weather from './weather/sagas';

export default function* rootSaga() {
  return yield all([forecast, weather]);
}
