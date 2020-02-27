import { UPDATE_COLLECTIONS } from '../reducerTypes';

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
