import { createAction } from '@reduxjs/toolkit';
import { RentalOffer, SelectedRentalOffer } from '../types/offer';
import { RoutePath, SortOption } from '../const';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { OfferReview } from '../types/review';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

const loadOffer = createAction<SelectedRentalOffer>('data/loadOffer');

const loadNearPlaces = createAction<RentalOffer[]>('data/nearBy');

const loadReviews = createAction<OfferReview[]>('data/reviews');

const changeSorting = createAction<SortOption>('main/changeSorting');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setUserInfo = createAction<UserData | null>('data/setUserInfo');

const setOffersLoadingStatus = createAction<boolean>('common/setOffersLoadingStatus');

const setNearByLoadingStatus = createAction<boolean>('common/setNearByLoadingStatus');

const setReviewsLoadingStatus = createAction<boolean>('common/setReviewsLoadingStatus');

const setReviewPostingStatus = createAction<boolean>('common/setReviewsPostingStatus');

const setOfferLoadingStatus = createAction<boolean>('common/setOfferLoadingStatus');

const setError = createAction<string | null>('common/setError');

const redirectToRoute = createAction<RoutePath>('common/redirectToRoute');

export {changeCity, loadOffers, changeSorting, requireAuthorization, setUserInfo, setOffersLoadingStatus, setError, redirectToRoute, setOfferLoadingStatus, loadOffer, loadNearPlaces, loadReviews, setNearByLoadingStatus, setReviewsLoadingStatus, setReviewPostingStatus};
