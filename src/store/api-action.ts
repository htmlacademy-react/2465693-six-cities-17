import {APIRoute, RoutePath} from '../const';
import {loadOffer, loadOffers, redirectToRoute, setOfferLoadingStatus, setOffersLoadingStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { RentalOffer, SelectedRentalOffer } from '../types/offer.js';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { ThunkType, ThunkTypeNew } from '../types/api.js';
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

export const fetchNearbyAction = createAsyncThunk<RentalOffer[], string, ThunkTypeNew>(
  'data/fetchNearBy',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<RentalOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<OfferReview[], string, ThunkTypeNew>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
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

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkTypeNew>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkTypeNew>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkTypeNew>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const postReviewAction = createAsyncThunk<OfferReview, {offerId: string; postFormData: { comment: string; rating: number } },ThunkTypeNew>(
  'reviews/postReview',
  async ({offerId, postFormData}, {extra: api}) => {
    const {data} = await api.post<OfferReview>(`${APIRoute.Reviews}/${offerId}`, postFormData);
    return data;
  },
);
