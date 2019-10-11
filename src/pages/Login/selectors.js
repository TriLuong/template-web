import { createSelector } from 'reselect';

const loginReducer = state => state.get('loginReducer');

export const getData = createSelector(
  loginReducer,
  fetching => fetching.get('data'),
);

export const getErr = createSelector(
  loginReducer,
  dataUsers => dataUsers.get('error'),
);
