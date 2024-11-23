import { AgencyCommission } from 'src/types/core';

export type SignFormRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  commission?: AgencyCommission;
};
