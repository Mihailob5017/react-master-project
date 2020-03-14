import { createSelector } from 'reselect';

const shopData = state => state.shopdata;

export const shopDataSelector = createSelector(
  [shopData],
  shopdata => shopdata.collections
);
export const selectCollectionsForPreview = createSelector(
  [shopDataSelector],
  //We will get the keys for the objects and then we will map all the objects from that key-value pair
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCathegory = collectionUrlParam =>
  createSelector(
    [shopDataSelector],
    //Data Normalization is storing data as objects insted of arrays
    collection => (collection ? collection[collectionUrlParam] : null)
  );

export const selectIsFetching = createSelector(
  [shopData],
  shop => shop.isFetching
);
export const selectIsLoaded = createSelector([shopData], shop => !!shop.collections);
