import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { Log } from 'src/types/log';

export type getListLogRequest = {
  page: number;
  size: number;
  name?: string;
};

export type getListLogResponse = {
  data: {
    data: Log[];
    total: number;
  };
};

export function getListLog(request: getListLogRequest): Promise<getListLogResponse> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.GET_LOG,
      ...request,
    },
  });
}

const useListLog = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<getListLogResponse>();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: getListLogRequest) => {
      setLoading(true);

      return getListLog(request)
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

export default useListLog;
