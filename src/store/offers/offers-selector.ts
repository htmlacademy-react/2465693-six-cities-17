import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { NameSpace } from '../../const';
import { selectCity } from '../app/app-selector';

export const selectOffers = (state: AppState) => state[NameSpace.Offers].offers;
export const selectOffersLoading = (state: AppState) => state[NameSpace.Offers].isOfferLoading;
export const selectChosenOffer = (state: AppState) => state[NameSpace.Offers].chosenOffer;
export const selectNearByOffers = (state: AppState) => state[NameSpace.Offers].nearPlaces;
export const selectOfferLoading = (state: AppState) => state[NameSpace.Offers].isOfferLoading;
export const selectNearByLoading = (state: AppState) => state[NameSpace.Offers].isNearbyLoading;


export const getCurrentCityOffers = createSelector([selectOffers, selectCity], (offers, currentCity) => {
  const currentoffers = offers.filter((offer) => offer.city.name === currentCity);
  return currentoffers;
});
