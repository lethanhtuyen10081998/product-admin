import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { formatString } from 'src/libs/utils';
import { CommissionLevel } from 'src/types/commission';

export type Request = {
  agency_id: string;
  commission?: number | undefined;
  number_percent?: number | undefined;
  from_date: string;
  to_date: string;
};

export type Response = {
  data: {
    data: CommissionLevel[];
    total: number;
  };
};

export function updateCommission(id: string, request: Request): Promise<Response> {
  return internalApiInstance.put(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: formatString(endpoints.UPDATE_DEBT_LIMIT, { id }),
    ...request,
  });
}

const useUpdateCommission = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (id: string, request: Request) => {
    setLoading(true);

    return updateCommission(id, request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useUpdateCommission;
