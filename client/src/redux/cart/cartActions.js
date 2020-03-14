import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART
} from '../reducerTypes';
export const toggleCart = () => ({ type: TOGGLE_CART_HIDDEN });
export const addItem = item => ({ type: ADD_CART_ITEM, payload: item });
export const removeItem = item => ({ type: REMOVE_CART_ITEM, payload: item });
export const clearCart = () => ({ type: CLEAR_CART });
