import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useEffect, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { Agency } from 'src/types/agency';
import { formatString } from 'src/libs/utils';
import { useQuery } from '@tanstack/react-query';

export type GetAgencyRequest = {
  id: string;
};

export type GetAgencyResponse = {
  data: Agency;
};

export function getAgencyDetail({ id }: GetAgencyRequest): Promise<GetAgencyResponse> {
  return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
    params: {
      url: formatString(endpoints.GET_AGENCY_DETAIL, { id }),
    },
  });
}

const useAgencyDetail = (request: GetAgencyRequest) => {
  const { data, ...others } = useQuery({
    queryKey: ['agency-detail', request],
    queryFn: () => getAgencyDetail(request),
  });

  return {
    data: data?.data,
    ...others,
  };
};

export default useAgencyDetail;
