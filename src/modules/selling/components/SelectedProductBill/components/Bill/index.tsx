import { Box, Paper, Typography, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form';
import NumberField from 'src/components/material/form/NumberField';
import { SPACING } from 'src/constants/grid';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import { validation } from './validation';
import FormTextField from 'src/components/material/form/FormTextField';

export type FilterProductRequest = {
  totalQuantity: number;
  totalPrice: number;
  discountCode: string;
  discountAmount: number;
  discountType: string;
  discountReason: string;
  paymentMethod: string;
  paymentStatus: string;
  note: string;
  amountPaid: number; // tiền đã thanh toán
  amountChange: number;
};

function Bill() {
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<FilterProductRequest>({
    resolver,
  });
  const { t } = useTranslation('sign-in');

  return (
    <Box component={Paper} p={SPACING.md}>
      <Box component='form'>
        <FormProvider {...methods}>
          <Grid container display='flex' gap={SPACING.sm}>
            <Grid item md={6}>
              <Box display='flex' gap={SPACING.sm}>
                <Typography fontWeight={700}> {t('Tổng số lượng')}:</Typography>
                <Typography fontWeight={700} color='green'>
                  25
                </Typography>
              </Box>
            </Grid>

            <Grid item md={6}>
              <FormTextField variant='outlined' name='discountCode' label={t('Mã giảm giá')} />
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Box>
  );
}

export { Bill };
