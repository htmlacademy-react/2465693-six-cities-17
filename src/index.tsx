import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favorites } from './mocks/favorites';
import { nearbyOffers } from './mocks/nearby-offers';
import { offerIds } from './mocks/offer-id';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOffersAction } from './store/api-action';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App favorites={favorites} nearbyOffers={nearbyOffers} offerIds={offerIds} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
