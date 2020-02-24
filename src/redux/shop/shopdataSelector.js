import { createSelector } from 'reselect';

const shopData = state => state.shopdata;

export const shopDataSelector = createSelector(
  [shopData],
  shopdata => shopdata.items
);
