import { createAction } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';
import { SortOption } from '../const';
import { AuthorizationStatus } from '../const';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

const changeSorting = createAction<SortOption>('main/changeSorting');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export {changeCity, loadOffers, changeSorting, requireAuthorization};
