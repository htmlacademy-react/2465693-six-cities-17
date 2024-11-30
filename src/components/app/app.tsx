import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import { RoutePath } from '../../const.ts';

type AppScreenProps = {
  offerCardsCount: number;
};

function App({ offerCardsCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainScreen offerCardsCount={offerCardsCount} />}/>
          <Route path={RoutePath.OFFER} element={<OfferScreen/>}/>
          <Route path={RoutePath.FAVORITES} element={<FavoritesScreen/>}/>
          <Route path={RoutePath.LOGIN} element={<LoginScreen/>}/>
          <Route path={RoutePath.NOT_FOUND} element={<NotFoundScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
