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
import { convertMoneyToNumber } from 'src/libs/utils';
import useCreateDebtLimit from 'src/services/settings/debtLimit/createDebtLimit';
import * as yup from 'yup';

export type FormRequest = {
  amount: string;
  name: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required('debt-limit:message.please_enter_name'),
  amount: yup.string().required('debt-limit:message.please_enter_limited_amount'),
});

const ModalCreateGroupOrder = ({
  isOpen,
  onClosed,
  onRefreshData,
}: {
  isOpen: boolean;
  onClosed(): void;
  onRefreshData(): void;
}) => {
  const { t } = useTranslation('debt-limit');
  const { loading, mutation } = useCreateDebtLimit();
  const resolver = useYupValidationResolver(validationSchema);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {
      amount: '',
      name: '',
    },
    mode: 'onChange',
  });

  const handleSubmit = useCallback(
    (values: FormRequest) => {
      mutation({
        amount: convertMoneyToNumber(values.amount),
        name: values.name,
      })
        .then(() => {
          onRefreshData();
          onClosed();
        })
        .catch((error) => {
          enqueueSnackbar(error?.response?.data?.message || error.message, {
            variant: 'error',
          });
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enqueueSnackbar, onClosed, onRefreshData],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('create_debt_limit')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormTextField fullWidth name='name' label={t('name')} />

          <NumberField fullWidth name='amount' label={t('limited_amount')} />

          <Box display='flex' mt={3} justifyContent='end' gap={2}>
            <Button
              variant='outlined'
              onClick={() => onClosed()}
              disabled={loading}
              label='Hủy '
            ></Button>

            <Button
              variant='contained'
              type='submit'
              color='primary'
              loading={loading}
              label='Lưu'
            ></Button>
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
    return ({ onRefreshData }: { onRefreshData(): void }) => {
      if (!isOpen) {
        return null;
      }

      return (
        <ModalCreateGroupOrder onClosed={close} isOpen={isOpen} onRefreshData={onRefreshData} />
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
