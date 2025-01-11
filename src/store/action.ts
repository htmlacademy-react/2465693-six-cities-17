import { createAction } from '@reduxjs/toolkit';
import { RentalOffer, SelectedRentalOffer } from '../types/offer';
import { RoutePath, SortOption } from '../const';
import { OfferReview } from '../types/review';

const changeCity = createAction<string>('main/changeCity');

const loadOffers = createAction<RentalOffer[]>('data/loadOffers');

const loadOffer = createAction<SelectedRentalOffer>('data/loadOffer');

const loadNearPlaces = createAction<RentalOffer[]>('data/nearBy');

const loadReviews = createAction<OfferReview[]>('data/reviews');

const changeSorting = createAction<SortOption>('main/changeSorting');

const setOffersLoadingStatus = createAction<boolean>('common/setOffersLoadingStatus');

const setNearByLoadingStatus = createAction<boolean>('common/setNearByLoadingStatus');

const setReviewsLoadingStatus = createAction<boolean>('common/setReviewsLoadingStatus');

const setReviewPostingStatus = createAction<boolean>('common/setReviewsPostingStatus');

const setOfferLoadingStatus = createAction<boolean>('common/setOfferLoadingStatus');

const setReviewPostingError = createAction<boolean>('common/setReviewPostingError');

const setError = createAction<string | null>('common/setError');

const redirectToRoute = createAction<RoutePath>('common/redirectToRoute');

export {changeCity, loadOffers, changeSorting, setOffersLoadingStatus, setError, redirectToRoute, setOfferLoadingStatus, loadOffer, loadNearPlaces, loadReviews, setNearByLoadingStatus, setReviewsLoadingStatus, setReviewPostingStatus, setReviewPostingError};
