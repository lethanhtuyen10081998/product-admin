import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import { ProductCardType } from 'src/types/product';
import endpoints from '../endpoints';
import { AgencyCommission, AgencyDebtLimit } from 'src/types/core';

export type Request = {
  level?: number;
};

export type Response = {
  data: {
    data: AgencyDebtLimit[];
  };
};

export function getListAgencyDebtLimit(request?: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      ...request,
      url: endpoints.AGENCY_DEBT_LIMIT,
      page: 1,
      size: 100,
    },
  });
}

const useListAgencyDebtLimit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ data: AgencyDebtLimit[] }>();

  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return getListAgencyDebtLimit(request)
      .then((response) => {
        setData(response.data);
        return response;
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
    data: data?.data || [],
  };
};

export default useListAgencyDebtLimit;
