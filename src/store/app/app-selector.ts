import { NameSpace } from '../../const';
import { AppState } from '../../types/state';

export const selectCity = (state: AppState) => state[NameSpace.App].city;
export const selectCurrentSort = (state: AppState) => state[NameSpace.App].currentSort;
