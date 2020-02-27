import { SHOP_DATA } from './ShopData';
import { UPDATE_COLLECTIONS } from '../reducerTypes';
const initalState = {
  items: SHOP_DATA
};

const shopDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
export default shopDataReducer;
