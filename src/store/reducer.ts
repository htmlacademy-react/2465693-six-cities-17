import { DEFAULT_CITY} from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { RentalOffer } from '../types/offer';

type InitialState = {
  city: string;
  offers: RentalOffer[];
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity, (state, action) =>{
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
