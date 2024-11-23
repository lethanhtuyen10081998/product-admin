import { useCallback, useState } from 'react';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { formatString } from 'src/libs/utils';
import { CommissionLevel } from 'src/types/commission';

export type Request = {
  agency_id: string;
  commission?: number | undefined;
  number_percent?: number | undefined;
  from_date: Date | null;
  to_date: Date | null;
};

export type Response = {
  data: {
    data: CommissionLevel;
    total: number;
  };
};

export function createCommission(request: Request): Promise<Response> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.CREATE_COMMISSION_LEVEL,
    ...request,
  });
}

const useCreateCommission = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return createCommission(request).finally(() => setLoading(false));
  }, []);
  return {
    mutation,
    loading,
  };
};

export default useCreateCommission;
