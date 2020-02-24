import { createSelector } from 'reselect';

const shopData = state => state.shopdata;

export const shopDataSelector = createSelector(
  [shopData],
  shopdata => shopdata.items
);
export const selectCollectionsForPreview = createSelector(
  [shopDataSelector],
  //We will get the keys for the objects and then we will map all the objects from that key-value pair
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCathegory = collectionUrlParam =>
  createSelector(
    [shopDataSelector],
    //Data Normalization is storing data as objects insted of arrays
    collection => collection[collectionUrlParam]
  );
