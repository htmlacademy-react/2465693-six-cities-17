import { RentalOffer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OfferCardsListType = {
  offers: RentalOffer[];
};

function OfferCardsList({ offers }: OfferCardsListType): JSX.Element {
  const [, setActiveOfferCardId] = useState<string | null>('');
  const offerCardMouseEnterHandler = (id: string): void => {
    setActiveOfferCardId(id);
  };
  const offerCardMouseLeaveHandler = (): void => {
    setActiveOfferCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType="cities"
          onOfferCardMouseEnter={() => {
            offerCardMouseEnterHandler(offer.id);
          }}
          onOfferCardMouseLeave={() => {
            offerCardMouseLeaveHandler();
          }}
        />
      ))}
    </div>
  );
}

export default OfferCardsList;
