export type Country = {
  country: string;
  group: string;
};

export type AgencyCommission = {
  id: string;
  commission: number;
  level: number;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
};

export interface AgencyDebtLimit {
  id?: string;
  name?: string;
  amount?: number;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
}
