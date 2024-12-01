import LocationsList from '../../components/locations-list/locations-list';
import OfferCard from '../../components/offer-card/offer-card';
import Header from '../../components/header/header';
import Sort from '../../components/sort/sort';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';

type MainScreenProps = {
  offerCardsCount: number;
};

function MainScreen({ offerCardsCount }: MainScreenProps): JSX.Element {
  const offerCardsList = Array.from({ length: offerCardsCount }, (_, k) => (
    <OfferCard key={k} />
  ));

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort/>
              <div className="cities__places-list places__list tabs__content">
                {offerCardsList};
              </div>
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
