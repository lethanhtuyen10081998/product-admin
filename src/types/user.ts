import { Agency } from './agency';

export type UserProfile = {
  username: string;
  userInfo: UserInfo;
  wallet: Wallet;
  phone: string;
  agency?: Agency;
};

export type UserInfo = {
  avatar: string;
  dob: string;
  first_name: string;
  gender: number;
  last_name: string;
  user_id: string;
};

export type Wallet = {
  id: string;
  amount: number;
  active: number;
  user_id: string;
  version: number;
  created_at: string;
  updated_at: string;
};
