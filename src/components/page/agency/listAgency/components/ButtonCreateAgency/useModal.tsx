import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import FormTextField from 'src/components/material/form/FormTextField';
import PasswordField from 'src/components/material/form/PasswordField';
import PhoneNumberField from 'src/components/material/form/PhoneNumberField';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import AutoCompleteAgencyLevelCommission from 'src/components/ui/AutoCompleteAgencyLevelCommission';
import { useProfileContext } from 'src/context/profileContext/hooksContext';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useCreateAgency from 'src/services/agency/create';
import * as yup from 'yup';
import { SignFormRequest } from './types';
import { useAPIData } from 'src/context/dataContext/provider';
import { validation } from './validation';

const ModalContent = ({
  isOpen,
  onClosed,
  agencyId,
}: {
  isOpen: boolean;
  onClosed(): void;
  agencyId?: string;
}) => {
  const { t } = useTranslation('agencys');
  const { mutation, loading } = useCreateAgency();
  const resolver = useYupValidationResolver(validation);
  const { enqueueSnackbar } = useSnackbar();
  const { profile } = useProfileContext();
  const { onRefreshData } = useAPIData();

  const methods = useForm<SignFormRequest>({
    resolver,
    defaultValues: {},
    mode: 'onChange',
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
          onRefreshData();
          onClosed();
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error?.message, {
            variant: 'error',
          });
        });
    },
    [enqueueSnackbar, mutation, onClosed, onRefreshData],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('create_agency')}
    >
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
    </Dialog>
  );
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Dialog = useMemo(() => {
    return ({ agencyId }: { agencyId?: string }) => {
      if (!isOpen) {
        return null;
      }

      return <ModalContent onClosed={close} isOpen={isOpen} agencyId={agencyId} />;
    };
  }, [close, isOpen]);

  return useMemo(
    () => ({
      isOpen,
      Dialog,
      open,
      close,
    }),
    [isOpen, Dialog, open, close],
  );
};
