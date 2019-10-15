import { createSelector } from 'reselect';

const currentLoadsReducer = state => state.get('homeReducer');

export const getCurrentLoads = createSelector(
  currentLoadsReducer,
  loads => loads.get('currentLoads'),
);

export const getErr = createSelector(
  currentLoadsReducer,
  err => err.get('error'),
);

export const getUsers = createSelector(
  currentLoadsReducer,
  users => users.get('users'),
);

export const getUser = createSelector(
  currentLoadsReducer,
  user => user.get('user'),
);
