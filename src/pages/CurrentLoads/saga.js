import { put, takeLatest } from 'redux-saga/effects';
import { isConnecting, isEndConnecting } from 'pages/Loader/actions';
import * as actions from './actions';
import * as types from './constants';
import dataCurrent from './dataCurrent';

function* getCurrentLoads({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.getCurrentLoadsSuccess(dataCurrent));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.getCurrentLoadsFailure(error));
    yield put(isEndConnecting());
  }
}

function* addLoadRequest({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.addLoadSuccess(payload));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.addLoadFailure(error));
    yield put(isEndConnecting());
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(types.ADD_LOAD_REQUEST, addLoadRequest);
  yield takeLatest(types.GET_CURRENT_LOADS_REQUEST, getCurrentLoads);
}
