import CityOffersEmpty from '../../components/city-offers-empty/city-offers-empty';
import LocationsList from '../../components/locations-list/locations-list';
import CityOffers from '../../components/city-offers/city-offers';
import Header from '../../components/header/header';
import classNames from 'classnames';
import { getCurrentCityOffers } from '../../store/offers/offers-selector';
import { selectCity } from '../../store/app/app-selector';
import { useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';

function MainPage(): JSX.Element {
  const activeLocation = useAppSelector(selectCity);
  const currentCityOffers = useAppSelector(getCurrentCityOffers);

  const pageMainClass = classNames('page__main', 'page__main--index', { 'page__main--index-empty': !currentCityOffers.length });
  const placesContainerClass = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !currentCityOffers.length,
  });

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>

      <Header />

      <main className={pageMainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList activeLocation={activeLocation} />
        <div className="cities">
          <div className={placesContainerClass}>
            {currentCityOffers.length ? (
              <CityOffers currentCityOffers={currentCityOffers} activeLocation={activeLocation} />
            ) : (
              <CityOffersEmpty cityName={activeLocation} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
