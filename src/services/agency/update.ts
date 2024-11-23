import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import { Agency } from 'src/types/agency';
import { formatString } from 'src/libs/utils';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import useTranslation from 'next-translate/useTranslation';

export type Request = {
  agencyDebtLimitId: string;
  commission: number;
};

export type Response = {
  data: {
    data: Agency[];
    count: number;
  };
};

export function update(id: string, request: Request): Promise<Response> {
  return internalApiInstance.put(endpoints.LOCAL_API_PREFIX_AUTH, {
    url: formatString(endpoints.UPDATE_AGENCY, { id }),
    ...request,
  });
}

const useUpdateAgency = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation('common');

  const mutation = useCallback(
    async (id: string, request: Request) => {
      setLoading(true);

      return update(id, request)
        .then(() =>
          enqueueSnackbar(t('message.update_success'), {
            variant: 'success',
          }),
        )
        .catch(() =>
          enqueueSnackbar(t('message.update_success_failed'), {
            variant: 'error',
          }),
        )
        .finally(() => setLoading(false));
    },
    [enqueueSnackbar, t],
  );

  return {
    mutation,
    loading,
  };
};

export default useUpdateAgency;
