import { put, takeLatest } from 'redux-saga/effects';
import { isConnecting, isEndConnecting } from 'pages/Loader/actions';
import * as actions from './actions';
import * as types from './constants';
import dataUsers from './dataUsers';

function* getUsers({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.getUsersSuccess(dataUsers));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.getUsersFailure(error));
    yield put(isEndConnecting());
  }
}

function* getUser({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.getUserSuccess(payload));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.getUserFailure(error));
    yield put(isEndConnecting());
  }
}

function* addUser({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.addUserSuccess(payload));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.addUserFailure(error));
    yield put(isEndConnecting());
  }
}

function* editUser({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.editUserSuccess(payload));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.editUserFailure(error));
    yield put(isEndConnecting());
  }
}

function* filterUsers({ payload }) {
  yield put(isConnecting());
  try {
    yield put(actions.filterUsersSuccess(payload));
    yield put(isEndConnecting());
  } catch (error) {
    yield put(actions.filterUsersFailure(error));
    yield put(isEndConnecting());
  }
}

export default function* currentLoadWatcher() {
  yield takeLatest(types.GET_USERS_REQUEST, getUsers);
  yield takeLatest(types.ADD_USER_REQUEST, addUser);
  yield takeLatest(types.GET_USER_REQUEST, getUser);
  yield takeLatest(types.EDIT_USER_REQUEST, editUser);
  yield takeLatest(types.FILTER_USERS_REQUEST, filterUsers);
}
