import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { Order, OrderItem } from 'src/types/order';

export type getListOrderRequest = {
  page: number;
  size: number;
  name?: string;
  parent_id?: string;
  isRefund?: boolean;
};

export type getListOrderResponse = {
  data: {
    data: OrderItem[];
    total: number;
  };
};

export function getListOrder(request: getListOrderRequest): Promise<getListOrderResponse> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.GET_LIST_ORDER_ITEM,
      ...request,
    },
  });
}

const useListOrderItems = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<getListOrderResponse>();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: getListOrderRequest) => {
      setLoading(true);

      return getListOrder(request)
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

export default useListOrderItems;
