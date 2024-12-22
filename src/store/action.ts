import { createAction } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';
import { SortOption } from '../const';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

const changeSorting = createAction<SortOption>('main/changeSorting');

export {changeCity, loadOffers, changeSorting};
