import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../reducerTypes';
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = err => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: err
});

export const emailSignInStart = emailAndPass => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPass
});

export const emailSignInSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = err => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: err
});

export const signUpStart = data => ({
  type: SIGN_UP_START,
  payload: data
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
});

export const signUpFailute = err => ({
  type: SIGN_UP_FAILURE,
  payload: err
});

export const checkUserSession = () => ({ type: CHECK_USER_SESSION });

export const signOutStart = () => ({ type: SIGN_OUT_START });

export const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });

export const signOutFailure = () => ({ type: SIGN_OUT_FAILURE });
