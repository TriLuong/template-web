import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import dataCurrent from './dataCurrent';
import dataUsers from './dataUsers';

function* getCurrentLoads({ payload }) {
  try {
    yield put(actions.getCurrentLoadsSuccess(dataCurrent));
  } catch (error) {
    yield put(actions.getCurrentLoadsFailure(error));
  }
}

function* getUsers({ payload }) {
  try {
    yield put(actions.getUsersSuccess(dataUsers));
  } catch (error) {
    yield put(actions.getUsersFailure(error));
  }
}

function* addLoadRequest({ payload }) {
  try {
    yield put(actions.addLoadSuccess(payload));
  } catch (error) {
    yield put(actions.addLoadFailure(error));
  }
}

function* getUser({ payload }) {
  try {
    yield put(actions.getUserSuccess(payload));
  } catch (error) {
    yield put(actions.getUserFailure(error));
  }
}

function* addUser({ payload }) {
  try {
    yield put(actions.addUserSuccess(payload));
  } catch (error) {
    yield put(actions.addUserFailure(error));
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(types.ADD_LOAD_REQUEST, addLoadRequest);
  yield takeLatest(types.GET_CURRENT_LOADS_REQUEST, getCurrentLoads);
  yield takeLatest(types.GET_USERS_REQUEST, getUsers);
  yield takeLatest(types.ADD_USER_REQUEST, addUser);
  yield takeLatest(types.GET_USER_REQUEST, getUser);
}
