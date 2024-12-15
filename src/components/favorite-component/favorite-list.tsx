import OfferCard from '../offer-card/offer-card';
import { RentalOffer } from '../../types/offer';
import FavoriteEmpty from './favorite-empty';
import { getOfferFavoriteGroup } from '../../group-favorites';

type FavoriteListProps = {
  offers: RentalOffer[];
}

function FavoriteList({offers}: FavoriteListProps): JSX.Element {
  const offerFavoriteGroup = getOfferFavoriteGroup({ offers });
  if (!offers.length) {
    return <FavoriteEmpty/>;
  }

  return(
    <ul className="favorites__list">
      {Object.entries(offerFavoriteGroup).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              {/* При нажатии (cобытие onClick) будет срабатывать логика смены фильтра списка по городу. */}
              <a className="locations__item-link" >
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
  );
}

export default FavoriteList;
