import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersSlice } from './offers/offers-slice';
import { reviewsSlice } from './reviews/reviews-slice';
import { authSlice } from './auth/auth-slice';
import { appSlice } from './app/app-slice';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
});

export default rootReducer;
