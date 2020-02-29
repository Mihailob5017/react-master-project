import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../reducerTypes';

import {
  firestore,
  collectionSnapshotToMap
} from '../../firebase/FireBaseUtill';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const asyncFetchCollectionsStart = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = collectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(err => fetchCollectionsFailure(err.message));
  };
};

const fetchCollectionsFailure = err => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: err
});

const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});
