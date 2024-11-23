import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import { DebtLimit } from 'src/types/debtLimit';
import endpoints from 'src/services/endpoints';

export type Request = {
  name: string;
  amount: number;
};

export type Response = {
  data: {
    data: DebtLimit;
    total: number;
  };
};

export function createDebtLimit(request: Request): Promise<Response> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.CREATE_DEBT_LIMIT,
    ...request,
  });
}

const useCreateDebtLimit = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return createDebtLimit(request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useCreateDebtLimit;
