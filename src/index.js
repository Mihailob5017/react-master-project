import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
