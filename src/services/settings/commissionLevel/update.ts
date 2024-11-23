import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import { DebtLimit } from 'src/types/debtLimit';
import { formatString } from 'src/libs/utils';
import endpoints from 'src/services/endpoints';

export type Request = {
  level: number;
  commission: number;
};

export type Response = {
  data: {
    data: DebtLimit[];
    total: number;
  };
};

export function update(id: string, request: Request): Promise<Response> {
  return internalApiInstance.put(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: formatString(endpoints.UPDATE_COMMISSION_LEVEL, { id }),
    ...request,
  });
}

const useUpdateCommissionLevel = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (id: string, request: Request) => {
    setLoading(true);

    return update(id, request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useUpdateCommissionLevel;
