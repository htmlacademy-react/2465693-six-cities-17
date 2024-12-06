import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FavoritesScreen from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundScreen from '../../pages/not-found-page/not-found-page.tsx';
import OfferScreen from '../../pages/offer-page/offer-page.tsx';
import LoginScreen from '../../pages/login-page/login-page.tsx';
import MainScreen from '../../pages/main-page/main-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { RoutePath, AuthorizationStatus } from '../../const.ts';
import { RentalOffer } from '../../types/offer.ts';

type AppPageProps = {
  offers: RentalOffer[];
};

function App({ offers}: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainScreen offers={offers}/>}/>
            <Route path={RoutePath.Offer} element={<OfferScreen/>}/>
            <Route
              path={RoutePath.Favorites}
              element={
                <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
                  <FavoritesScreen/>
                </PrivateRoute>
              }
            />
            <Route path={RoutePath.Login} element={<LoginScreen/>}/>
            <Route path={RoutePath.NotFound} element={<NotFoundScreen/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
