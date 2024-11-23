import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
// import { useCallback, useState } from 'react';
// import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { Agency } from 'src/types/agency';
import { useQuery } from '@tanstack/react-query';

export type GetListAgencyRequest = {
  page: number;
  size: number;
  keyword?: string;
  parent_id?: string;
};

export type GetListAgencyResponse = {
  data: {
    data: Agency[];
    total: number;
  };
};

export function getListAgency(request: GetListAgencyRequest): Promise<GetListAgencyResponse> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: endpoints.GET_LIST_AGENCY,
      ...request,
    },
  });
}

const useListAgency = (request: GetListAgencyRequest) => {
  const { data, ...others } = useQuery({
    queryKey: ['agency-list', request],
    queryFn: () => getListAgency(request),
  });

  return {
    data: data?.data.data || [],
    total: data?.data.total || 0,
    ...others,
  };
};

export default useListAgency;
