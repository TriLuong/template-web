import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { ADD_LOAD_REQUEST, GET_CURRENT_LOADS_REQUEST } from './constants';
import dataCurrent from './dataCurrent';

function* getCurrentLoads({ payload }) {
  try {
    yield put(actions.getCurrentLoadsSuccess(dataCurrent));
  } catch (error) {
    yield put(actions.getCurrentLoadsFailure(error));
  }
}

function* addLoadRequest({ payload }) {
  try {
    yield put(actions.addLoadSuccess(payload));
  } catch (error) {
    yield put(actions.addLoadFailure(error));
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(ADD_LOAD_REQUEST, addLoadRequest);
  yield takeLatest(GET_CURRENT_LOADS_REQUEST, getCurrentLoads);
}
