import { NameSpace } from '../../const';
import { AppState } from '../../types/state';

export const selectAuthorizationStatus = (state: AppState) => state[NameSpace.Auth].authorizationStatus;
export const selectUserInfo = (state:AppState) => state[NameSpace.Auth].userInfo;
