import { AgencyDebtLimit } from 'src/types/core';

export type SignFormRequest = {
  firstName: string;
  lastName: string;
  email: string;
  birthday?: Date | null;
  commission: number;
  agencyDebtLimitId?: AgencyDebtLimit;
};
