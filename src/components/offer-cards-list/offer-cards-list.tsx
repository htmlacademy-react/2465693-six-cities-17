import { RentalOffer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferCardsListPrors = {
  offers: RentalOffer[];
}

function OfferCardsList({offers}:OfferCardsListPrors): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} cardType='cities'/>)}
    </div>
  );
}

export default OfferCardsList;
