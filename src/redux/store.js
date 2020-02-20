import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

const middlewares = [];
const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
