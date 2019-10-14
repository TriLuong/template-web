import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { ADD_LOAD_REQUEST } from './constants';

function* addLoadRequest({ payload }) {
  try {
    yield put(actions.addLoadSuccess(payload));
  } catch (error) {
    yield put(actions.addLoadFailure(error));
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(ADD_LOAD_REQUEST, addLoadRequest);
}
