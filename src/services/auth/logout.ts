import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { useRouter } from 'next/router';
import { Routes } from 'src/constants/route';

export type RequestLogout = {};

export type ResponseSignIn = {};

export function logout(): Promise<ResponseSignIn> {
  return internalApiInstance.post(endpoints.SIGN_OUT);
}

const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const mutation = useCallback(async () => {
    setLoading(true);

    return logout()
      .then((response) => {
        enqueueSnackbar(t('common:logout_success'), {
          variant: 'success',
        });
        router.push(Routes.SIGN_IN);
        return response;
      })
      .catch((error) => {
        enqueueSnackbar(error?.response?.data?.message || error?.message, {
          variant: 'error',
        });
        return error;
      })
      .finally(() => setLoading(false));
  }, [enqueueSnackbar, router, t]);

  return {
    mutation,
    loading,
  };
};

export default useLogout;
