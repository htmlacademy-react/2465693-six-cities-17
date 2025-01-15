import { SortOption } from '../const';
import { store } from '../store';
import { RentalOffer, SelectedRentalOffer } from './offer';

// выводим тип хранилища
export type AppState = ReturnType<typeof store.getState>;

// для получения полной информации о типах, когда мы будем использовать dispatch
export type AppDispatch = typeof store.dispatch;

export type AppSlice = {
  city: string;
  currentSort: SortOption;
}

export type OffersSlice = {
  offers: RentalOffer[];
  selectedOffer: SelectedRentalOffer|null;
  nearPlaces: RentalOffer[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  isNearbyLoading: boolean;
};
