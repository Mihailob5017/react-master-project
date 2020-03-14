import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../reducerTypes';
import {
  firestore,
  collectionSnapshotToMap
} from '../../firebase/FireBaseUtill';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopActions';

//  YIELD - Similar to await

// PUT - dispatch()

//  Call - Call a function,similar to ()

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const CollectionsMap = yield call(collectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(CollectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
