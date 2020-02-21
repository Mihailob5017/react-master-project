import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from '../reducerTypes';
const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case ADD_CART_ITEM: {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }

    default:
      return state;
  }
};
export default cartReducer;
