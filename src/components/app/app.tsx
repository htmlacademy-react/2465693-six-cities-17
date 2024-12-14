import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { RoutePath, AuthorizationStatus } from '../../const.ts';
import { RentalOffer } from '../../types/offer.ts';
import { OfferReview } from '../../types/review.ts';

type AppPageProps = {
  offers: RentalOffer[];
  favorites: RentalOffer[];
  nearbyOffers: RentalOffer[];
  offerIds: RentalOffer[];
  reviews: OfferReview[];
};

function App({ offers, favorites, nearbyOffers, offerIds, reviews }: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainPage offers={offers} />} />
            <Route path={RoutePath.Offer} element={<OfferPage nearbyOffers={nearbyOffers} offersIds={offerIds} reviews={reviews}/>} />
            <Route
              path={RoutePath.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage offers={favorites} />
                </PrivateRoute>
              }
            />
            <Route path={RoutePath.Login} element={<LoginPage />} />
            <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
