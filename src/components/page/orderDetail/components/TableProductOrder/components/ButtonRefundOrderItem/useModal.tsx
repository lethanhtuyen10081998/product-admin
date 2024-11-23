import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import FormTextField from 'src/components/material/form/FormTextField';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useRecharge from 'src/services/agency/recharge';
import * as yup from 'yup';

export type FormRequest = {
  note?: string;
};

const validationSchema = yup.object().shape({});

const ModalCreateGroupOrder = ({
  isOpen,
  onClosed,
  orderItemId,
}: {
  isOpen: boolean;
  onClosed(): void;
  orderItemId: string;
}) => {
  const { t } = useTranslation();

  const resolver = useYupValidationResolver(validationSchema);

  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {},
    mode: 'onChange',
  });

  const handleSubmit = useCallback((values: FormRequest) => {
    console.log(values);
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('common:refund')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormTextField fullWidth name='note' label='Ghi chú' rows={4} multiline />

          <Box display='flex' mt={3} justifyContent='end' gap={2}>
            <Button
              variant='outlined'
              onClick={() => onClosed()}
              label={t('common:cancel')}
            ></Button>

            <Button variant='contained' type='submit' color='primary'>
              {t('common:refund')}
            </Button>
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
    return ({ orderItemId }: { orderItemId: string }) => {
      if (!isOpen) {
        return null;
      }

      return <ModalCreateGroupOrder onClosed={close} isOpen={isOpen} orderItemId={orderItemId} />;
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
