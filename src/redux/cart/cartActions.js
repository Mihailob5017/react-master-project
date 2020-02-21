import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from '../reducerTypes';
export const toggleCart = () => ({ type: TOGGLE_CART_HIDDEN });
export const addItem = item => ({ type: ADD_CART_ITEM, payload: item });
