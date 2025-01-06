import {APIRoute, AuthorizationStatus, RoutePath} from '../const';
import {loadNearPlaces, loadOffer, loadOffers, loadReviews, redirectToRoute, requireAuthorization, setNearByLoadingStatus, setOfferLoadingStatus, setOffersLoadingStatus, setReviewPostingStatus, setReviewsLoadingStatus, setUserInfo} from './action';
import {saveToken, dropToken} from '../services/token';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { RentalOffer, SelectedRentalOffer } from '../types/offer.js';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { ThunkType } from '../types/api.js';
import { OfferReview } from '../types/review.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkType>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<RentalOffer[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchNearbyAction = createAsyncThunk<void, string, ThunkType>(
  'data/fetchNearBy',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setNearByLoadingStatus(true));
    const {data} = await api.get<RentalOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearByLoadingStatus(false));
    dispatch(loadNearPlaces(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, ThunkType>(
  'reviews/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(setReviewsLoadingStatus(false));
    dispatch(loadReviews(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, ThunkType>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));
    try {
      const {data} = await api.get<SelectedRentalOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setOfferLoadingStatus(false));
      dispatch(loadOffer(data));
      dispatch(fetchNearbyAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    } catch {
      dispatch(setOfferLoadingStatus(false));
      dispatch(redirectToRoute(RoutePath.NotFound));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setUserInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkType>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserInfo(data));
    dispatch(redirectToRoute(RoutePath.Index));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  },
);

export const postReviewAction = createAsyncThunk<void, {offerId: string; formData: { comment: string; rating: number } },ThunkType>(
  'reviews/postReview',
  async ({offerId, formData}, {dispatch, extra: api}) => {
    dispatch(setReviewPostingStatus(true));
    try{
      const postReview = await api.post<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`, formData);
      const {data} = await api.get<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`);
      if (postReview?.data){
        dispatch(loadReviews(data));
      }
      dispatch(setReviewPostingStatus(false));
    } catch{
      dispatch(setReviewPostingStatus(false));
    }
  },
);
