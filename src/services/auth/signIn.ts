import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useCallback, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';

export type RequestSignIn = {
  username: string;
  password: string;
};

export type ResponseSignIn = {
  data: {
    access_expires: number;
    access_token: string;
    profile: {
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      birthday: string;
      id: number;
    };
    refresh_expires: number;
    refresh_token: string;
  };
};

export function signIn(request: RequestSignIn): Promise<ResponseSignIn> {
  return internalApiInstance.post(endpoints.SIGN_IN, request);
}

const useSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation('sign-in');
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useCallback(
    async (request: RequestSignIn) => {
      setLoading(true);

      return signIn(request)
        .then((response) => {
          enqueueSnackbar(t('messages.agencies_sign_in_success'), {
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
    [enqueueSnackbar, t],
  );

  return {
    mutation,
    loading,
  };
};

export default useSignIn;
