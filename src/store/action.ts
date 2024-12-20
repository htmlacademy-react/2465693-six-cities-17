import { createAction } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

export {changeCity, loadOffers};
