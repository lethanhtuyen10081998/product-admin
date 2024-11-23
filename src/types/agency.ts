import { AgencyDebtLimit } from './core';

export type Agency = {
  id: string;
  description?: string;
  active: AgencyStatus;
  user_id: string;
  credit_limit_id: number;
  level: number;
  debtLimit: AgencyDebtLimit;
  commission?: number;
  created_at: string;
  updated_at: string;
  revenue: number;
  user: {
    email: string;
    fullname: string;
    g_uid: null;
    id: string;
    info?: {
      first_name: string;
      last_name: string;
      dob?: String;
    };
    note: null;
    oauth: null;
    password: string;
    phone: string;
    state: 1;
    uid: string;
    username: string;
  };
  statistic: {
    revenue: number;
    discount: number;
  };
};

export type AgencyRechargeLog = {
  id: string;
  user_id: string;
  note: string;
  amount: number;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
};

export enum AgencyStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}

export const AgencyStatusLabel = {
  [AgencyStatus.ACTIVE]: 'active',
  [AgencyStatus.INACTIVE]: 'inactive',
};
