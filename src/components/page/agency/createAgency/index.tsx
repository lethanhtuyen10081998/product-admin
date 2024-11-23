import { Box, Paper, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import FormTextField from 'src/components/material/form/FormTextField';
import PasswordField from 'src/components/material/form/PasswordField';
import PhoneNumberField from 'src/components/material/form/PhoneNumberField';
import { PADDING } from 'src/constants/grid';
import { Routes } from 'src/constants/route';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useCreateAgency from 'src/services/agency/create';
import { SignFormRequest } from './types';
import { validation } from './validation';
import AutoCompleteAgencyLevelCommission from 'src/components/ui/AutoCompleteAgencyLevelCommission';
import { useProfileContext } from 'src/context/profileContext/hooksContext';

export default function CreateAgency() {
  const router = useRouter();
  const { t } = useTranslation('agencys');
  const { mutation, loading } = useCreateAgency();
  const { enqueueSnackbar } = useSnackbar();

  const { profile } = useProfileContext();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<SignFormRequest>({
    resolver,
  });

  const handleSubmit = useCallback(
    (values: SignFormRequest) => {
      mutation({
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        password: values.password,
        phone: values.phone,
        commission: values.commission?.commission,
      })
        .then(() => {
          router.push(Routes.LIST_AGENCY);
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error?.message, {
            variant: 'error',
          });
        });
    },
    [enqueueSnackbar, mutation, router],
  );

  return (
    <Box display='flex' justifyContent='center'>
      <Box maxWidth={400} component={Paper} p={PADDING}>
        <Typography textAlign='center' variant='h3'>
          {t('create_agency')}
        </Typography>

        <Box mt={2} component='form'>
          <FormProvider {...methods}>
            <FormTextField
              name='firstName'
              label={t('common:first_name')}
              InputProps={{ startAdornment: <Icon name='user-interface' /> }}
            />

            <FormTextField
              name='lastName'
              label={t('common:last_name')}
              InputProps={{ startAdornment: <Icon name='user-interface' /> }}
            />

            <PhoneNumberField
              name='phone'
              label={t('common:phone_number')}
              InputProps={{ startAdornment: <Icon name='phone' /> }}
            />

            <FormTextField
              name='email'
              label={t('common:email')}
              InputProps={{ startAdornment: <Icon name='email' /> }}
            />

            <PasswordField
              name='password'
              label={t('common:password')}
              InputProps={{ startAdornment: <Icon name='password' /> }}
            />

            <PasswordField
              name='confirmPassword'
              label={t('common:confirm_password')}
              InputProps={{ startAdornment: <Icon name='password' /> }}
            />

            <AutoCompleteAgencyLevelCommission
              level={profile?.agency?.level}
              name='commission'
              label={t('common:commission')}
            />
            <Box mt={2}>
              <Button
                label={t('common:create')}
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
