import { Box } from '@mui/material';
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
  amount: yup.number().required('Vui lòng nhập số tiền!'),
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
        amount: Number(values.amount),
        note: values.note || '',
      }).then(() => {
        methods.reset({
          amount: 0,
          note: '',
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [methods, userId],
  );

  return (
    <Dialog open={isOpen} onClose={() => onClosed()} maxWidth='xs' fullWidth title='Nạp tiền'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <NumberField fullWidth name='amount' label='Số tiền nạp' />

          <FormTextField fullWidth name='note' label='Ghi chú' rows={4} multiline />

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
              label='Nạp tiền'
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
