import { createSelector } from 'reselect';

const usersReducer = state => state.get('usersReducer');

export const getUsers = createSelector(
  usersReducer,
  users => users.get('users'),
);

export const getUser = createSelector(
  usersReducer,
  user => user.get('user'),
);

export const getErr = createSelector(
  usersReducer,
  err => err.get('error'),
);
