import { all } from 'redux-saga/effects';

import background from './background/sagas';
import forecast from './forecast/sagas';

export default function* rootSaga() {
  return yield all([background, forecast]);
}
