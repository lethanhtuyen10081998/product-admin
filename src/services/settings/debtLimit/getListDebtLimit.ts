import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from 'src/services/endpoints';
import { DebtLimit } from 'src/types/debtLimit';

export type Request = {
  page: number;
  size: number;
  name?: string;
};

export type Response = {
  data: {
    data: DebtLimit[];
    total: number;
  };
};

export function getListDebtLimit(request: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.DEBT_LIMIT,
      ...request,
    },
  });
}

const useListDebtLimit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return getListDebtLimit(request)
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

export default useListDebtLimit;
