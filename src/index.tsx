import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favorites } from './mocks/favorites';
import { nearbyOffers } from './mocks/nearby-offers';
import { offerIds } from './mocks/offer-id';
import { reviews } from './mocks/reviews';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offers} favorites={favorites} nearbyOffers={nearbyOffers} offerIds={offerIds} reviews={reviews}/>
  </React.StrictMode>
);
