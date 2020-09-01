import { all } from 'redux-saga/effects';

import background from './background/sagas';
import forecast from './forecast/sagas';
import weather from './weather/sagas';

export default function* rootSaga() {
  return yield all([background, forecast, weather]);
}
