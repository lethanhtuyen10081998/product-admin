import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { CommissionLevel } from 'src/types/commission';

export type Request = {
  page: number;
  size: number;
  name?: string;
};

export type Response = {
  data: {
    data: CommissionLevel[];
    total: number;
  };
};

export function getListCommission(request: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.COMMISSION_LEVEL,
      ...request,
    },
  });
}

const useListCommission = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  console.log(data);
  const { enqueueSnackbar } = useSnackbar();
  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return getListCommission(request)
        .then((response) => {
          setData(response);
          return response;
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error?.message, {
            variant: 'error',
          });
        })
        .finally(() => setLoading(false));
    },
    [enqueueSnackbar],
  );

  return {
    mutation,
    loading,
    data: data?.data || [],
    count: data?.data.total || 0,
  };
};

export default useListCommission;
