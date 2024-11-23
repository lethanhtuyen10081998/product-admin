import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import Dialog from 'src/components/material/Dialog';
import AutoCompleteAgencyDebtLimit from 'src/components/ui/AutoCompleteAgencyDebt';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import useUpdateAgencyDebtLimit from 'src/services/agency/agencyDebt';
import { Agency } from 'src/types/agency';
import { AgencyDebtLimit } from 'src/types/core';
import * as yup from 'yup';

export type FormRequest = {
  agencyDebtLimitId: AgencyDebtLimit;
};
const validationSchema = yup.object().shape({});

const ModalCreateGroupOrder = ({
  isOpen,
  onClosed,
  agency,
}: {
  isOpen: boolean;
  onClosed(): void;
  agency: Agency;
}) => {
  const { t } = useTranslation('agencys');
  const { loading, mutation } = useUpdateAgencyDebtLimit();
  const resolver = useYupValidationResolver(validationSchema);

  const methods = useForm<FormRequest>({
    resolver,
    defaultValues: {
      agencyDebtLimitId: agency.debtLimit,
    },
    mode: 'onChange',
  });

  const handleSubmit = useCallback(
    (values: FormRequest) => {
      mutation({
        agencyId: agency.id,
        agencyDebtLimitId: values.agencyDebtLimitId.id || '',
      }).then(() => {
        onClosed?.();
      });
    },
    [agency.id, mutation, onClosed],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => onClosed()}
      maxWidth='xs'
      fullWidth
      title={t('set_up_debit')}
    >
      <FormProvider {...methods}>
        <AutoCompleteAgencyDebtLimit name='agencyDebtLimitId' label={t('common:debit_limit')} />

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
            onClick={methods.handleSubmit(handleSubmit)}
            label={t('common:save')}
          ></Button>
        </Box>
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
    return ({ agency }: { agency: Agency }) => {
      if (!isOpen) {
        return null;
      }

      return <ModalCreateGroupOrder onClosed={close} isOpen={isOpen} agency={agency} />;
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
