import { Token } from '../services/token';

export type UserData = {
  email: string;
  id: number;
  token: Token;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
