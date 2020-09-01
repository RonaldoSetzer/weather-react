import { all } from 'redux-saga/effects';

import background from './background/sagas';

export default function* rootSaga() {
  return yield all([background]);
}
