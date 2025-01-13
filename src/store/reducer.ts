import { changeCity, changeSorting, loadOffer, setOfferLoadingStatus} from './action';
import { AuthorizationStatus, DEFAULT_CITY, SortOption} from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { RentalOffer, SelectedRentalOffer } from '../types/offer';
import { UserData } from '../types/user-data';
import { OfferReview } from '../types/review';
import { checkAuthAction, fetchNearbyAction, fetchOffersAction, fetchReviewsAction, loginAction, logoutAction, postReviewAction } from './api-action';

type InitialState = {
  city: string;
  offers: RentalOffer[];
  currentSort: SortOption;
  selectedOffer: SelectedRentalOffer|null;
  nearPlaces: RentalOffer[];
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData|null;
  reviews: OfferReview[];
  favorites:RentalOffer[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  isReviewsLoading: boolean;
  isReviewPosting: boolean;
  isNearbyLoading: boolean;
  isFavoriteLoading: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentSort: SortOption.Popular,
  selectedOffer: null,
  nearPlaces: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  reviews: [],
  favorites: [],
  isOffersLoading: false,
  isOfferLoading: false,
  isReviewsLoading: false,
  isReviewPosting: false,
  isNearbyLoading: false,
  isFavoriteLoading: false,
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity, (state, action) =>{
      state.city = action.payload;
    })

    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.isOffersLoading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
    })

    .addCase(loadOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })

    .addCase(checkAuthAction.fulfilled, (state, action)=> {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state)=> {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action)=> {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(loginAction.rejected, (state)=> {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = null;
    })
    .addCase(fetchNearbyAction.pending, (state) => {
      state.isNearbyLoading = true;
    })
    .addCase(fetchNearbyAction.fulfilled, (state, action) => {
      state.isNearbyLoading = false;
      state.nearPlaces = action.payload;
    })
    .addCase(fetchNearbyAction.rejected, (state) => {
      state.isNearbyLoading = false;
    })
    .addCase(fetchReviewsAction.pending, (state) => {
      state.isReviewsLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.isReviewsLoading = false;
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.isReviewsLoading = false;
    })
    .addCase(postReviewAction.pending, (state) => {
      state.isReviewPosting = true;
    })
    .addCase(postReviewAction.fulfilled, (state, action) => {
      state.isReviewPosting = false;
      state.reviews = [action.payload, ...state.reviews];
    })
    .addCase(postReviewAction.rejected, (state) => {
      state.isReviewPosting = false;
    })

    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    });
});

export {reducer};
