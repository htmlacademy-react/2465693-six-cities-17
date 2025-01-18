import { NameSpace } from '../../const';
import { AppState } from '../../types/state';

export const selectFavorites = (state: AppState) => state[NameSpace.Favorites].favorites;
