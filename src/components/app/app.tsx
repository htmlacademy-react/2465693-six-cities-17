import { Route, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { RoutePath, AuthorizationStatus } from '../../const.ts';
import { RentalOffer, SelectedRentalOffer } from '../../types/offer.ts';
import { OfferReview } from '../../types/review.ts';
import { useAppSelector } from '../../hooks/index.ts';
import LoadingPage from '../../pages/loading-page/loading-page.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';

type AppPageProps = {
  favorites: RentalOffer[];
  nearbyOffers: RentalOffer[];
  offerIds: SelectedRentalOffer[];
  reviews: OfferReview[];
};

function App({ favorites, nearbyOffers, offerIds, reviews }: AppPageProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainPage />} />
            <Route path={RoutePath.Offer} element={<OfferPage nearbyOffers={nearbyOffers} offersIds={offerIds} reviews={reviews}/>} />
            <Route path={RoutePath.Favorites} element={<PrivateRoute><FavoritesPage offers={favorites} /></PrivateRoute>}/>
            <Route path={RoutePath.Login} element={<LoginPage />} />
            <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
