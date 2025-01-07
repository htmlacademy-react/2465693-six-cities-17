import OfferCardsList from '../../components/offer-cards-list/offer-cards-list';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';
import Header from '../../components/header/header';
import { changeCity } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useState } from 'react';
import CityOffersEmpty from '../../components/city-offers-empty/city-offers-empty';
import classNames from 'classnames';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeLocation = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=>state.offers);
  const currentCityOffers = offers.filter((offer)=> offer.city.name === activeLocation);
  const [activeOfferCardId, setActiveOfferCardId] = useState<string | null>('');
  const placesContainerClass = classNames('cities__places-container', 'container', {'cities__places-container--empty':!currentCityOffers.length });
  const pageMainClass = classNames('page__main', 'page__main--index', {'page__main--index-empty':!currentCityOffers.length});

  const offerCardMouseEnterHandler = (id: string): void => {
    setActiveOfferCardId(id);
  };
  const offerCardMouseLeaveHandler = (): void => {
    setActiveOfferCardId(null);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>

      <Header />

      <main className={pageMainClass}>
        <h1 className="visually-hidden">Cities</h1>

        <LocationsList activeLocation={activeLocation} clickHandler={(city: string) => dispatch(changeCity(city))}/>

        <div className="cities">
          <div className={placesContainerClass}>
            {!currentCityOffers.length ? (<CityOffersEmpty cityName={activeLocation}/>) :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {activeLocation}</b>

                <Sorting />
                <OfferCardsList offers={currentCityOffers} onOfferCardMouseEnterHandler={offerCardMouseEnterHandler} onOfferCardMouseLeaveHandler={offerCardMouseLeaveHandler} />;

              </section>}
            <div className="cities__right-section">
              {!!currentCityOffers.length && <Map className={'cities__map'} offers={currentCityOffers} activeOfferCardId={activeOfferCardId}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
