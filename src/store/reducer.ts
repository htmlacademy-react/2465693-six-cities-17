import { DEFAULT_CITY, SortOption} from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSorting } from './action';
import { RentalOffer } from '../types/offer';

type InitialState = {
  city: string;
  offers: RentalOffer[];
  currentSort: SortOption;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentSort: SortOption.Popular,
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
    });
});

export {reducer};
