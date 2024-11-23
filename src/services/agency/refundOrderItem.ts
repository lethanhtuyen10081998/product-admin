import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';

export type Request = {
  amount: number;
  orderId: string;
  note: string;
};

export type Response = {
  data: {};
};

export function refund(request: Request): Promise<Response> {
  return internalApiInstance.post(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: endpoints.REFUND_ORDER,
    ...request,
  });
}

const useRefund = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return refund(request)
        .then((response) => {
          enqueueSnackbar('Hoàn tiền thành công thành công!', {
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

export default useRefund;
