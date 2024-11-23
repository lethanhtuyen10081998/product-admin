import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { formatString } from 'src/libs/utils';

export type Request = {
  agencyDebtLimitId?: string;
  agencyId: string;
};

export type Response = {
  data: {};
};

export function agencyDebt(request: Request): Promise<Response> {
  return internalApiInstance.put(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: formatString(endpoints.UPDATE_AGENCY_DEBT_LIMIT, {
      agencyId: request.agencyId,
    }),
    ...request,
  });
}

const useUpdateAgencyDebtLimit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: Request) => {
      setLoading(true);

      return agencyDebt(request)
        .then((response) => {
          enqueueSnackbar('Cập nhật thành công!', {
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

export default useUpdateAgencyDebtLimit;
