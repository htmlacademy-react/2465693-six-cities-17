import { RentalOffer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type NearPlacesProps = {
  nearPlacesOffers: RentalOffer[];
}

function NearPlaces ({nearPlacesOffers}:NearPlacesProps) {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
              Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearPlacesOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              cardType='near-places'
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
