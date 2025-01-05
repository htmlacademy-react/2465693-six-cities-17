import { AxiosInstance } from 'axios';
import { AppDispatch, AppState } from './state';

export type ThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}
