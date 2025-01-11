import {APIRoute, RoutePath} from '../const';
import {loadNearPlaces, loadOffer, loadOffers, loadReviews, redirectToRoute, setNearByLoadingStatus, setOfferLoadingStatus, setOffersLoadingStatus, setReviewPostingError, setReviewPostingStatus, setReviewsLoadingStatus} from './action';
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

export const postReviewAction = createAsyncThunk<void, {offerId: string; postFormData: { comment: string; rating: number } },ThunkType>(
  'reviews/postReview',
  async ({offerId, postFormData}, {dispatch, extra: api}) => {
    try{
      const postReview = await api.post<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`, postFormData);
      dispatch(setReviewPostingStatus(true));
      const {data} = await api.get<OfferReview[]>(`${APIRoute.Reviews}/${offerId}`);

      if (postReview?.data){
        dispatch(loadReviews(data));
        dispatch(setReviewPostingStatus(false));
      }
    } catch{
      dispatch(setReviewPostingError(true));
    }
  },
);
