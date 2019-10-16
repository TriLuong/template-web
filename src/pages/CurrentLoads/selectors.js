import { createSelector } from 'reselect';

const currentLoadsReducer = state => state.get('currentLoadsReducer');

export const getCurrentLoads = createSelector(
  currentLoadsReducer,
  loads => loads.get('currentLoads'),
);

export const getErr = createSelector(
  currentLoadsReducer,
  err => err.get('error'),
);
