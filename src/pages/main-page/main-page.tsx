import OfferCardsList from '../../components/offer-cards-list/offer-cards-list';
import LocationsList from '../../components/locations-list/locations-list';
import Header from '../../components/header/header';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { RentalOffer } from '../../types/offer';

type MainPageProps = {
  offers: RentalOffer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const activeLocation = 'Paris';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList activeLocation={activeLocation} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <OfferCardsList offers={offers} />;
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

export default MainPage;
