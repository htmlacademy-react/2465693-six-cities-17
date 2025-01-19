import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, SortOption } from '../../const';
import { OptionValue } from '../../types/sort';
import { AppSlice } from '../../types/state';

const initialState: AppSlice = {
  city: DEFAULT_CITY,
  currentSort: SortOption.Popular,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCity: (state, action:PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCurrentSort: (state, action:PayloadAction<OptionValue>) => {
      state.currentSort = action.payload;
    }
  }
});

export const {setCity, setCurrentSort} = appSlice.actions;
