import { createAction } from 'redux-actions';
import * as types from './constants';

export const getCurrentLoads = createAction(types.GET_CURRENT_LOADS_REQUEST);
export const getCurrentLoadsSuccess = createAction(
  types.GET_CURRENT_LOADS_SUCCESS,
);
export const getCurrentLoadsFailure = createAction(
  types.GET_CURRENT_LOADS_FAILURE,
);

export const addLoad = createAction(types.ADD_LOAD_REQUEST);
export const addLoadSuccess = createAction(types.ADD_LOAD_SUCCESS);
export const addLoadFailure = createAction(types.ADD_LOAD_FAILURE);

export const getUsers = createAction(types.GET_USERS_REQUEST);
export const getUsersSuccess = createAction(types.GET_USERS_SUCCESS);
export const getUsersFailure = createAction(types.GET_USERS_FAILURE);

export const addUser = createAction(types.ADD_USER_REQUEST);
export const addUserSuccess = createAction(types.ADD_USER_SUCCESS);
export const addUserFailure = createAction(types.ADD_USER_FAILURE);
