/** @format */

import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import routes from './routes';
import { persistor, store } from './Store';

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>{routes}</Router>
      </PersistGate>
    </Provider>
  );
}
