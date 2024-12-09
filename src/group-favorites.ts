import { RentalOffer } from './types/offer';

type OfferFavoriteGroupType = {
  offers: RentalOffer[];
};

type OfferFavoriteGroup = {
  [key: string]: RentalOffer[];
};

function getOfferFavoriteGroup({ offers }: OfferFavoriteGroupType): OfferFavoriteGroup {
  const result: OfferFavoriteGroup = {};
  offers.forEach((offer) => {
    const name: string = offer.city.name;

    if (!result[name]) {
      result[name] = [];
    }

    result[name].push(offer);
  });

  return result;
}

export { getOfferFavoriteGroup };
