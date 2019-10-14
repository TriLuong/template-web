import { createSelector } from 'reselect';

const currentLoadsReducer = state => state.get('currentLoadsReducer');

export const getData = createSelector(
  currentLoadsReducer,
  data => data.get('data'),
);

export const getErr = createSelector(
  currentLoadsReducer,
  err => err.get('error'),
);
