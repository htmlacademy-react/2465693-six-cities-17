import { changeCity, loadOffers, changeSorting, requireAuthorization, setOffersLoadingStatus, setUserInfo } from './action';
import { AuthorizationStatus, DEFAULT_CITY, SortOption} from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';
import { UserData } from '../types/user-data';

type InitialState = {
  city: string;
  offers: RentalOffer[];
  currentSort: SortOption;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData|null;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentSort: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity, (state, action) =>{
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(requireAuthorization, (state, action)=> {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
