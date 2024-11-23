import { useQuery } from '@tanstack/react-query';
import { internalApiInstance } from 'src/providers/authProvider';
import { Recharge } from 'src/types/recharge';
import endpoints from '../endpoints';

export type getListRechargeRequest = {
  page: number;
  size: number;
  name?: string;
  parent_id?: string;
};

export type getListRechargeResponse = {
  data: {
    data: Recharge[];
    total: number;
  };
};

export function getListRecharge(request: getListRechargeRequest): Promise<getListRechargeResponse> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.RECHARGE,
      ...request,
    },
  });
}

const useListRecharge = (request: getListRechargeRequest) => {
  const { data, ...others } = useQuery({
    queryKey: ['recharge-list', request],
    queryFn: () => getListRecharge(request),
  });

  return {
    data: data?.data.data || [],
    count: data?.data.total || 0,
    ...others,
  };
};

export default useListRecharge;
