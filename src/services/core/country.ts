import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import { Country } from 'src/types/core';

export type Request = {
  group?: string;
};

export type Response = {
  data: Country[];
};

export function getCountry(request?: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      ...request,
      url: endpoints.GET_COUNTRY,
    },
  });
}

const useListCountry = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();

  const mutation = useCallback(async (request: Request) => {
    setLoading(true);

    return getCountry(request)
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

export default useListCountry;
