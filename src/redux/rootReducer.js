import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//  Reducers
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  //    An array containing the string names of any reducers we want to store
  whitelist: ['cart']
};
const RootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default persistReducer(persistConfig, RootReducer);
