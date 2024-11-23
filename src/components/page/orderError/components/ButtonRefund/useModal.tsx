import { Box } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import FormTextField from 'src/components/material/form/FormTextField';
import NumberField from 'src/components/material/form/NumberField';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useRefund from 'src/services/agency/refundOrderItem';
import * as yup from 'yup';

export type FormRequest = {
  amount: string;
  note?: string;
};

const validationSchema = yup.object().shape({
  amount: yup.string().required('Vui lòng nhập số tiền!'),
});

const ModalCreateGroupOrder = ({
  isOpen,
  onClosed,
  orderItemId,
  amount,
}: {
  isOpen: boolean;
  onClosed(): void;
  orderItemId: string;
  amount: number;
}) => {
  const { loading, mutation } = useRefund();

  const resolver = useYupValidationResolver(validationSchema);

  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {
      amount: `${amount}`,
    },
    mode: 'onChange',
  });

  const handleSubmit = useCallback(
    (values: FormRequest) => {
      mutation({
        orderId: orderItemId,
        amount: Number(values.amount),
        note: values.note || '',
      }).then(() => {
        methods.reset({
          amount: '0',
          note: '',
        });
      });
    },
    [methods, mutation, orderItemId],
  );

  return (
    <Dialog open={isOpen} onClose={() => onClosed()} maxWidth='xs' fullWidth title='Hoàn tiền'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <NumberField disabled fullWidth name='amount' label='Số tiền hoàn' />
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
              label='Hoàn tiền'
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
    return ({ orderItemId, amount }: { orderItemId: string; amount: number }) => {
      if (!isOpen) {
        return null;
      }

      return (
        <ModalCreateGroupOrder
          onClosed={close}
          isOpen={isOpen}
          orderItemId={orderItemId}
          amount={amount}
        />
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
