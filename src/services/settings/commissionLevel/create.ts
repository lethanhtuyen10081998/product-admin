import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import { DebtLimit } from 'src/types/debtLimit';
import endpoints from 'src/services/endpoints';

export type Request = {
  level: number;
  commission: number;
};

export type Response = {
  data: {
    data: DebtLimit;
    total: number;
  };
};

export function create(request: Request): Promise<Response> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.CREATE_COMMISSION_LEVEL,
    ...request,
  });
}

const useCreateCommissionLevel = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return create(request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useCreateCommissionLevel;
