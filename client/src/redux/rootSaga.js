import { all, call } from 'redux-saga/effects';

//Sagas We are gonna run
import { fetchCollectionStart } from './shop/shopSaga';
import { userSagas } from './user/userSaga';
import { cartSagas } from './cart/cartSaga';
export function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas), call(cartSagas)]);
}
