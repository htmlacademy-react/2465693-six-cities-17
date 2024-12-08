import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';
import { nearbyOffers } from './mocks/nearby-offers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offers} favorites={favorites} nearbyOffers={nearbyOffers} />
  </React.StrictMode>
);
