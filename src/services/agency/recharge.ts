import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { Agency } from 'src/types/agency';

export type Request = {
  amount: number;
  user_id: string;
  note: string;
};

export type Response = {
  data: {};
};

export function recharge(request: Request): Promise<Response> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.RECHARGE,
    ...request,
  });
}

const useRecharge = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return recharge(request)
        .then((response) => {
          enqueueSnackbar('Nạp tiền thành công!', {
            variant: 'success',
          });

          return response;
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error?.message, {
            variant: 'error',
          });

          return error;
        })
        .finally(() => setLoading(false));
    },
    [enqueueSnackbar],
  );

  return {
    mutation,
    loading,
  };
};

export default useRecharge;
