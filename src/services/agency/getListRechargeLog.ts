import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { AgencyRechargeLog } from 'src/types/agency';

export type Request = {
  page: number;
  size: number;
  user_id: string;
};

export type Response = {
  data: {
    data: AgencyRechargeLog[];
    total: number;
  };
};

export function getListRechargeLog(request: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.RECHARGE,
      ...request,
    },
  });
}

const useListRechargeLog = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return getListRechargeLog(request)
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
    data: data?.data.data || [],
    count: data?.data.total || 0,
  };
};

export default useListRechargeLog;
