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
