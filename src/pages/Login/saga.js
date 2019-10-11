import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { LOGIN_REQUEST } from './constants';

function* loginRequest({ payload }) {
  try {
    yield put(actions.loginSuccess(payload));
  } catch (error) {
    yield put(actions.loginFailure('error'));
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}
