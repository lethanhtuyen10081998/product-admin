import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { Order } from 'src/types/order';
import { useQuery } from '@tanstack/react-query';

export type OrderFilter = {
  key_sort?: string;
  type_sort?: string | null;
  user_id?: string | null;
  from?: string | null;
  to?: string | null;
  status?: number | null;
  isRefund?: boolean;
  user_name?: string;
  email?: string;
  order_id?: string;
  date?: string | null;
};

export type Request = OrderFilter & {
  page: number;
  size: number;
  name?: string;
};

export type Response = {
  data: {
    data: Order[];
    total: number;
  };
};

export function getListOrder(request: Request): Promise<Response> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.GET_LIST_ORDER,
      ...request,
    },
  });
}

const useListOrder = (request: Request) => {
  const { data, ...others } = useQuery({
    queryKey: ['order-list', request],
    queryFn: () => getListOrder(request),
  });

  return {
    data: data?.data.data || [],
    total: data?.data.total || 0,
    ...others,
  };
};

export default useListOrder;
