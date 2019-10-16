import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import dataUsers from './dataUsers';

function* getUsers({ payload }) {
  try {
    yield put(actions.getUsersSuccess(dataUsers));
  } catch (error) {
    yield put(actions.getUsersFailure(error));
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

function* editUser({ payload }) {
  try {
    yield put(actions.editUserSuccess(payload));
  } catch (error) {
    yield put(actions.editUserFailure(error));
  }
}

function* filterUsers({ payload }) {
  try {
    yield put(actions.filterUsersSuccess(payload));
  } catch (error) {
    yield put(actions.filterUsersFailure(error));
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(types.GET_USERS_REQUEST, getUsers);
  yield takeLatest(types.ADD_USER_REQUEST, addUser);
  yield takeLatest(types.GET_USER_REQUEST, getUser);
  yield takeLatest(types.EDIT_USER_REQUEST, editUser);
  yield takeLatest(types.FILTER_USERS_REQUEST, filterUsers);
}
