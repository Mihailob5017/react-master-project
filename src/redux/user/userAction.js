import { SET_CURRENT_USER } from '../reducerTypes';
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
