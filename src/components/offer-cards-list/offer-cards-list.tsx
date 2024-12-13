import { RentalOffer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferCardsListProps = {
  offers: RentalOffer[];
  onOfferCardMouseEnterHandler: (id: string) => void;
  onOfferCardMouseLeaveHandler: () => void;
};

function OfferCardsList({offers, onOfferCardMouseEnterHandler, onOfferCardMouseLeaveHandler}: OfferCardsListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType="cities"
          onOfferCardMouseEnter={onOfferCardMouseEnterHandler}
          onOfferCardMouseLeave={onOfferCardMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

export default OfferCardsList;
