import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import { Agency } from 'src/types/agency';

export type CreateRequest = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  commission: any;
};

export type CreateResponse = {
  data: {
    data: Agency[];
    count: number;
  };
};

export function create(request: CreateRequest): Promise<CreateResponse> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.CREATE_AGENCY,
    ...request,
  });
}

const useCreateAgency = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useCallback(async (request: CreateRequest) => {
    setLoading(true);

    return create(request).finally(() => setLoading(false));
  }, []);

  return {
    mutation,
    loading,
  };
};

export default useCreateAgency;
