import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from '../reducerTypes';
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInSuccess,
  emailSignInFailure
} from './userAction';
import {
  googleProvider,
  auth,
  createUserProfileDoc
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

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignINStart)]);
}
