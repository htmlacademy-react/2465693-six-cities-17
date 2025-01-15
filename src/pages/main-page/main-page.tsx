import LocationsList from '../../components/locations-list/locations-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { changeCity } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import CityOffersEmpty from '../../components/city-offers-empty/city-offers-empty';
import classNames from 'classnames';
import CityOffers from '../../components/city-offers/city-offers';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const activeLocation = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=>state.offers);
  const currentCityOffers = offers.filter((offer)=> offer.city.name === activeLocation);

  const placesContainerClass = classNames('cities__places-container', 'container', {'cities__places-container--empty':!currentCityOffers.length });
  const pageMainClass = classNames('page__main', 'page__main--index', {'page__main--index-empty':!currentCityOffers.length});

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>

      <Header />

      <main className={pageMainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          activeLocation={activeLocation}
          clickHandler={(city: string) => dispatch(changeCity(city))}
        />
        <div className="cities">
          <div className={placesContainerClass}>
            {currentCityOffers.length ?
              <CityOffers
                currentCityOffers={currentCityOffers}
                activeLocation={activeLocation}
              /> :
              <CityOffersEmpty
                cityName={activeLocation}
              /> }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
