import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyAction, fetchOfferAction, fetchOffersAction } from '../api-actions';
import { OffersSlice } from '../../types/state';

const initialState: OffersSlice = {
  offers: [],
  chosenOffer: null,
  nearPlaces: [],
  isOffersLoading: false,
  isOfferLoading: false,
  isNearbyLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferLoading = false;
        state.chosenOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
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
      });
  },
});
