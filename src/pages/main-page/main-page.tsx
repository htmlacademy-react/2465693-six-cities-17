import OfferCardsList from '../../components/offer-cards-list/offer-cards-list';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';
import Header from '../../components/header/header';
import { changeCity } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useState } from 'react';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeLocation = useAppSelector((state)=> state.city);

  const offers = useAppSelector((state)=>state.offers);
  const currentCityOffers = offers.filter((offer)=> offer.city.name === activeLocation);

  const [activeOfferCardId, setActiveOfferCardId] = useState<string | null>('');
  const offerCardMouseEnterHandler = (id: string): void => {
    setActiveOfferCardId(id);
  };
  const offerCardMouseLeaveHandler = (): void => {
    setActiveOfferCardId(null);
  };
  const selectedOffer = currentCityOffers.find((offer) => offer.id === activeOfferCardId);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationsList activeLocation={activeLocation} clickHandler={(city: string) => dispatch(changeCity(city))}/>

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {activeLocation}</b>

              <Sorting />
              <OfferCardsList offers={currentCityOffers} onOfferCardMouseEnterHandler={offerCardMouseEnterHandler} onOfferCardMouseLeaveHandler={offerCardMouseLeaveHandler} />;

            </section>
            <div className="cities__right-section">
              {currentCityOffers.length > 0 ? <Map className={'cities__map'} offers={currentCityOffers} selectedOffer={selectedOffer}/> : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
