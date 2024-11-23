import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import FormTextField from 'src/components/material/form/FormTextField';
import NumberField from 'src/components/material/form/NumberField';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useUpdateCommissionLevel from 'src/services/settings/commissionLevel/update';
import useUpdateDebtLimit from 'src/services/settings/debtLimit/updateDebtLimit';
import { CommissionLevel } from 'src/types/commission';
import * as yup from 'yup';

export type FormRequest = {
  level: number;
  commission: number;
};

const validationSchema = yup.object().shape({
  commission: yup.string().required('commissions:message.please_enter_commission_value'),
  level: yup.string().required('commissions:message.please_enter_level_value'),
});

const ModalContent = ({
  isOpen,
  onClosed,
  data,
  onRefreshData,
}: {
  isOpen: boolean;
  onClosed(): void;
  data: CommissionLevel;
  onRefreshData(): void;
}) => {
  const { t } = useTranslation('commissions');
  const { loading, mutation } = useUpdateCommissionLevel();
  const resolver = useYupValidationResolver(validationSchema);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {
      level: data.level || 0,
      commission: data.commission,
    },
    mode: 'onChange',
  });

  const handleSubmit = useCallback(
    (values: FormRequest) => {
      mutation(data.id, {
        commission: Number(values.commission),
        level: Number(values.level),
      })
        .then(() => {
          enqueueSnackbar(t('message.update_commisson_level_success'), {
            variant: 'success',
          });
          onRefreshData();
          onClosed();
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error.message, {
            variant: 'error',
          });
        });
    },
    [data.id, enqueueSnackbar, mutation, onClosed, onRefreshData, t],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('edit_commission')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormTextField fullWidth name='commission' label={t('common:commission')} type='number' />

          <FormTextField fullWidth name='level' label={t('common:level')} type='number' />

          <Box display='flex' mt={3} justifyContent='end' gap={2}>
            <Button
              variant='outlined'
              onClick={() => onClosed()}
              disabled={loading}
              label={t('common:cancel')}
            />

            <Button
              variant='contained'
              type='submit'
              color='primary'
              loading={loading}
              label={t('common:save')}
            />
          </Box>
        </form>
      </FormProvider>
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
    return ({ data, onRefreshData }: { data: CommissionLevel; onRefreshData(): void }) => {
      if (!isOpen) {
        return null;
      }

      return (
        <ModalContent onClosed={close} isOpen={isOpen} data={data} onRefreshData={onRefreshData} />
      );
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
