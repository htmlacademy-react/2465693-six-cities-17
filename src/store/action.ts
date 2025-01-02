import { createAction } from '@reduxjs/toolkit';
import { RentalOffer } from '../types/offer';
import { RoutePath, SortOption } from '../const';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

const changeSorting = createAction<SortOption>('main/changeSorting');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setUserInfo = createAction<UserData | null>('data/setUserInfo');

const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

const setError = createAction<string | null>('common/setError');

const redirectToRoute = createAction<RoutePath>('common/redirectToRoute');

export {changeCity, loadOffers, changeSorting, requireAuthorization, setUserInfo, setOffersLoadingStatus, setError, redirectToRoute};
