import { Box, Paper, Typography, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form';
import NumberField from 'src/components/material/form/NumberField';
import { SPACING } from 'src/constants/grid';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import { validation } from './validation';
import FormTextField from 'src/components/material/form/FormTextField';
import { useSelectedProduct } from 'src/modules/selling/selectedProductContext/hooksContext';
import { useEffect } from 'react';

export type FilterProductRequest = {
  totalQuantity: number;
  totalPrice: string;
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
  const selectedProducts = useSelectedProduct();

  const totalQuantity = selectedProducts.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  useEffect(() => {
    methods.setValue('totalQuantity', totalQuantity);
    methods.setValue('totalPrice', totalPrice.toString());
  }, [totalQuantity, totalPrice, methods]);

  return (
    <Box component={Paper} p={SPACING.md}>
      <Box component='form'>
        <FormProvider {...methods}>
          <Grid container display='flex' gap={SPACING.sm}>
            <Grid item md={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display='flex' flexDirection='column' gap={SPACING.sm}>
                    <FormTextField
                      variant='outlined'
                      size='small'
                      name='totalQuantity'
                      label={t('Tổng số lượng')}
                    />
                    <FormTextField
                      variant='outlined'
                      size='small'
                      name='discountCode'
                      label={t('Mã giảm giá')}
                    />
                    <FormTextField
                      size='small'
                      variant='outlined'
                      name='paymentMethod'
                      label={t('Phương thức thanh toán')}
                    />
                    <FormTextField
                      variant='outlined'
                      size='small'
                      name='amountPaid'
                      label={t('Số tiền đã trả')}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display='flex' flexDirection='column' gap={SPACING.sm}>
                    <NumberField
                      variant='outlined'
                      name='totalPrice'
                      label={t('Tổng tiền')}
                      sizeField='small'
                    />
                    <FormTextField
                      variant='outlined'
                      size='small'
                      name='discountAmount'
                      label={t('Số tiền giảm')}
                    />
                    <FormTextField
                      size='small'
                      variant='outlined'
                      name='paymentStatus'
                      label={t('Trạng thái thanh toán')}
                    />
                    <FormTextField
                      size='small'
                      variant='outlined'
                      name='amountChange'
                      label={t('Tiền thối lại')}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Box>
  );
}

export { Bill };
