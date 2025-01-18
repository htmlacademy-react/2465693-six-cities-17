import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesSlice } from '../../types/state';
import { fetchFavoritesAction } from '../api-actions';

const initialState: FavoritesSlice = {
  favorites: [],
  isFavoritesLoading: false,
  isFavoritesPosting: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});
