import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { nearbyOffers } from './mocks/nearby-offers';
import { offerIds } from './mocks/offer-id';
import { reviews } from './mocks/reviews';
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
      <App favorites={favorites} nearbyOffers={nearbyOffers} offerIds={offerIds} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
