import { SHOP_DATA } from './ShopData';
const initalState = {
  items: SHOP_DATA
};

const shopDataReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopDataReducer;
