import { changeCity, loadOffers, changeSorting, requireAuthorization, setError } from './action';
import { AuthorizationStatus, DEFAULT_CITY, SortOption} from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';

type InitialState = {
  city: string;
  offers: RentalOffer[];
  currentSort: SortOption;
  authorizationStatus: AuthorizationStatus;
  error: string|null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentSort: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error:null,
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
    .addCase(setError, (state, action) =>{
      state.error = action.payload;
    });
});

export {reducer};
