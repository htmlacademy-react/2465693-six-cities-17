import { LOCATIONS } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, loadOffers } from './action';

const initialState = {
  city: LOCATIONS[0],
  offers: offers.filter((item)=> item.city.name === LOCATIONS[0]),
};

const reducer = createReducer(initialState, ()=> { });

export {reducer};
