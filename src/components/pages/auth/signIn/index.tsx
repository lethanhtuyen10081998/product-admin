import { Box, Paper, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import FormTextField from 'src/components/material/form/FormTextField';
import PasswordField from 'src/components/material/form/PasswordField';
import { Routes } from 'src/constants/route';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useSignIn from 'src/services/auth/signIn';
import { SignFormRequest } from './types';
import { validation } from './validation';

export default function SignIn() {
  const router = useRouter();
  const { mutation, loading } = useSignIn();

  const resolver = useYupValidationResolver(validation);
  const methods = useForm<SignFormRequest>({
    resolver,
  });
  const { t } = useTranslation('sign-in');
  const handleSubmit = useCallback(
    (values: SignFormRequest) => {
      mutation(values).then(() => {
        router.push(Routes.HOME);
      });
    },
    [mutation, router],
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          width: 1,
          display: 'flex',
          px: 4,
          top: -40,
        }}
      >
        <Box
          height={80}
          component={Paper}
          sx={{
            background: (theme) => theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 1,
          }}
        >
          <Typography textAlign='center' variant='h4' fontWeight='bold' color='white'>
            {t('title')}
          </Typography>
        </Box>
      </Box>

      <Box component={Paper} py={10} px={10}>
        <Typography textAlign='center'>Welcome to the Esim Forfun management page</Typography>
        <Box mt={2} component='form'>
          <FormProvider {...methods}>
            <FormTextField
              name='username'
              label={t('common:email')}
              InputProps={{ startAdornment: <Icon name='user-interface' /> }}
            />

            <PasswordField
              name='password'
              label={t('common:password')}
              InputProps={{ startAdornment: <Icon name='password' /> }}
            />

            <Box mt={2}>
              <Button
                label={t('common:signIn')}
                fullWidth
                type='submit'
                onClick={methods.handleSubmit(handleSubmit)}
                loading={loading}
              />
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
}
