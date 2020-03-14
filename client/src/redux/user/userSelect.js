import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const currUserSelector = createSelector(
  [selectUser],
  user => user.currentUser
);
