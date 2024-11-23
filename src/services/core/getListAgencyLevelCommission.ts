import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import { ProductCardType } from 'src/types/product';
import endpoints from '../endpoints';
import { AgencyCommission } from 'src/types/core';

export type Request = {
  level?: number;
};

export type Response = {
  data: AgencyCommission[];
};

export function getListAgencyLevelCommission(request?: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      ...request,
      url: endpoints.AGENCY_LEVEL_COMMISSION,
    },
  });
}

const useListAgencyLevelCommission = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return getListAgencyLevelCommission(request)
      .then((response) => {
        setData(response);
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

export default useListAgencyLevelCommission;
