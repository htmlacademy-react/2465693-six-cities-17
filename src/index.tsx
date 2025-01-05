import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { store } from './store';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App favorites={favorites} />
    </Provider>
  </React.StrictMode>
);
