import { Box, Paper } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Icon } from 'src/components/icons';
import FormTextField from 'src/components/material/form/FormTextField';
import NumberField from 'src/components/material/form/NumberField';
import { PADDING, SPACING } from 'src/constants/grid';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import { validation } from './validation';

export type FilterProductRequest = {
  name: string;
};

function FilterProduct() {
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<FilterProductRequest>({
    resolver,
  });
  const { t } = useTranslation('sign-in');

  return (
    <Box component={Paper} p={PADDING.md}>
      <Box component='form'>
        <FormProvider {...methods}>
          <Box display='flex' gap={SPACING.sm}>
            <FormTextField
              name='username'
              label={t('common:search')}
              placeholder={t('common:search')}
              InputProps={{ startAdornment: <Icon name='search' /> }}
            />

            <NumberField
              name='amount'
              label={t('common:amount')}
              placeholder={t('common:amount')}
            />
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
}

export { FilterProduct };
