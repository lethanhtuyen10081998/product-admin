import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import { Agency, AgencyStatus } from 'src/types/agency';
import { formatString } from 'src/libs/utils';

export type CreateRequest = {
  status: AgencyStatus;
};

export type CreateResponse = {
  data: {
    data: Agency;
    count: number;
  };
};

export function changeStatus(id: string, request: CreateRequest): Promise<CreateResponse> {
  return internalApiInstance.put(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: formatString(endpoints.CHANGE_STATUS_AGENGY_ACCOUNT, { id }),
    ...request,
  });
}

const useChangeStatusAgency = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (id: string, request: CreateRequest) => {
    setLoading(true);

    return changeStatus(id, request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useChangeStatusAgency;
