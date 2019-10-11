import { createAction } from 'redux-actions';
import * as types from './constants';

export const loginRequest = createAction(types.LOGIN_REQUEST);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginFailure = createAction(types.LOGIN_FAILURE);
