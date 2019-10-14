import { createAction } from 'redux-actions';
import * as types from './constants';

export const addLoad = createAction(types.ADD_LOAD_REQUEST);
export const addLoadSuccess = createAction(types.ADD_LOAD_SUCCESS);
export const addLoadFailure = createAction(types.ADD_LOAD_FAILURE);
