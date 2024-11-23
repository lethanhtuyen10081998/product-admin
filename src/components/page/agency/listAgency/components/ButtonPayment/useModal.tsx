import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import FormTextField from 'src/components/material/form/FormTextField';
import NumberField from 'src/components/material/form/NumberField';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useRecharge from 'src/services/agency/recharge';
import * as yup from 'yup';

export type FormRequest = {
  amount: number;
  note?: string;
};

const validationSchema = yup.object().shape({
  amount: yup.string().required('Vui lòng nhập số tiền!'),
});

const ModalCreateGroupOrder = ({
  isOpen,
  onClosed,
  userId,
}: {
  isOpen: boolean;
  onClosed(): void;
  userId: string;
}) => {
  const { loading, mutation } = useRecharge();
  const { t } = useTranslation();
  const resolver = useYupValidationResolver(validationSchema);

  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {},
    mode: 'onChange',
  });

  const handleSubmit = useCallback(
    (values: FormRequest) => {
      mutation({
        user_id: userId,
        amount: Number(`${values.amount}`.split(',').join('')),
        note: values.note || '',
      }).then(() => {
        methods.reset({
          amount: 0,
          note: '',
        });

        onClosed();
      });
    },
    [methods, mutation, onClosed, userId],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('common:recharge')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <NumberField fullWidth name='amount' label={t('common:deposit_amount')} />

          <FormTextField fullWidth name='note' label={t('common:note')} rows={4} multiline />

          <Box display='flex' mt={3} justifyContent='end' gap={2}>
            <Button
              variant='outlined'
              onClick={() => onClosed()}
              disabled={loading}
              label={t('common:cancel')}
            ></Button>

            <Button
              variant='contained'
              type='submit'
              color='primary'
              loading={loading}
              label={t('common:recharge')}
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
    return ({ userId }: { userId: string }) => {
      if (!isOpen) {
        return null;
      }

      return <ModalCreateGroupOrder onClosed={close} isOpen={isOpen} userId={userId} />;
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
