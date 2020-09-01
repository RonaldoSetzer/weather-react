import { call, put, all, takeLatest } from 'redux-saga/effects';
import { updateBackgroundImage } from './actions';

import { getImageOfDay } from '../../../services/bingAPI';

function* requestBingImageOfDay() {
  const image = yield call(getImageOfDay);

  yield put(updateBackgroundImage(image));
}

export default all([
  takeLatest('@bing/IMAGE_OF_DAY_REQUEST', requestBingImageOfDay),
]);
