import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { getOfferFavoriteGroup } from '../../group-favorites';
import { RentalOffer } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import classNames from 'classnames';

type FavoritesPageType = {
  offers: RentalOffer[];
};

function FavoritesPage({ offers }: FavoritesPageType): JSX.Element {
  const offerFavoriteGroup = getOfferFavoriteGroup({ offers });

  return (
    <div className={classNames('page', { 'page--favorites-empty': !offers.length })}>
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      <Header />

      <main className={classNames('page__main', 'page__main--favorites', { 'page__main--favorites-empty': !offers.length })}>
        <div className="page__favorites-container container">
          <section className={classNames('favorites', { 'favorites--empty': !offers.length })}>
            <h1 className={offers.length ? 'favorites__title' : 'visually-hidden'}>
              {offers.length ? 'Saved listing' : 'Favorites (empty)'}
            </h1>
            <ul className="favorites__list">
              {Object.entries(offerFavoriteGroup).map(([city, cityOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <OfferCard key={offer.id} offer={offer} cardType="favorites" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
