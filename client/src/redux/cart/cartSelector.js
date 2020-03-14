//  We use Select to specify withc state should be replaced so that we dont have to update the whole state
import { createSelector } from 'reselect';

//  input selector
const selectCart = state => state.cart;

//  output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartItemsPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
