import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
} from '../reducerTypes';
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInSuccess,
  emailSignInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailute,
  signUpSuccess
} from './userAction';
import {
  googleProvider,
  auth,
  createUserProfileDoc,
  getCurrentUser
} from '../../firebase/FireBaseUtill';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDoc, user);
    const snapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDoc, user);
    const snapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}
export function* onEmailSignINStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDoc, userAuth);
    const snapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUpFunction);
}

export function* signUpFunction({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDoc, user, { displayName });
    const snapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailute(error));
  }
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignINStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart)
  ]);
}
