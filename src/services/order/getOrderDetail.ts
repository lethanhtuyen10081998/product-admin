import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { Order } from 'src/types/order';
import { formatString } from 'src/libs/utils';

export type Request = {
  id: string;
};

export type Response = {
  data: Order;
};

export function getOrderDetail(request: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: formatString(endpoints.ORDER_DETAIL, { id: request.id }),
      ...request,
    },
  });
}

const useOrderDetail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return getOrderDetail(request)
        .then((response) => {
          setData(response);
          return response;
        })
        .catch((error) => {
          if (Array.isArray(error?.response?.data?.message)) {
            error?.response?.data?.message.map((item: string) => {
              enqueueSnackbar(item, {
                variant: 'error',
              });
            });

            return;
          }

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
    data,
  };
};

export default useOrderDetail;
