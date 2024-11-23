export interface Recharge {
  id?: string;
  user_id?: string;
  note?: string;
  amount?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
  user?: User;
}

export interface User {
  id?: string;
  fullname?: string;
  email?: string;
  phone?: string;
  password?: string;
  username?: string;
  state?: number;
  uid?: string;
  note?: null;
  g_uid?: null;
  a_uid?: null;
  fb_uid?: null;
  oauth?: null;
  role?: string;
}
