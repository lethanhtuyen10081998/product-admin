import { Box, Paper, Typography, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form';
import NumberField from 'src/components/material/form/NumberField';
import { PADDING, SPACING } from 'src/constants/grid';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import { validation } from './validation';
import FormTextField from 'src/components/material/form/FormTextField';
import { useSelectedProduct } from 'src/modules/selling/selectedProductContext/hooksContext';
import { useEffect } from 'react';
import DropdownField from 'src/components/material/form/DropdownField';
import { PaymentMethod, PaymentOptions } from 'src/types/payment';
import { convertMoneyToNumber, formatMoney } from 'src/libs/utils';
import Button from 'src/components/material/Button';

export type FilterProductRequest = {
  totalQuantity: number;
  totalPrice: string;
  discountCode: string;
  discountAmount: string;
  discountType: string;
  discountReason: string;
  paymentMethod: string;
  paymentStatus: string;
  note: string;
  amountPaid: string; // tiền đã thanh toán
  amountChange: string;
};

function Bill() {
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<FilterProductRequest>({
    resolver,
    defaultValues: {
      totalQuantity: 0,
      totalPrice: '0',
      paymentMethod: PaymentMethod.CASH,
      amountPaid: '0',
      amountChange: '0',
      discountCode: '',
      discountAmount: '0',
      discountType: '',
      discountReason: '',
      paymentStatus: '',
      note: '',
    },
  });
  const { t } = useTranslation('sign-in');
  const selectedProducts = useSelectedProduct();

  const totalQuantity = selectedProducts.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  const amountPaid = convertMoneyToNumber(methods.getValues('amountPaid'));
  const amountChange = amountPaid - totalPrice;

  const onSubmit = (data: FilterProductRequest) => {
    console.log(data);
  };

  useEffect(() => {
    methods.setValue('totalQuantity', totalQuantity);
    methods.setValue('totalPrice', totalPrice.toString());
    methods.setValue('amountPaid', amountPaid.toString());
    methods.setValue('amountChange', amountChange.toString());
  }, [totalQuantity, totalPrice, amountPaid, amountChange, methods]);

  return (
    <Box component={Paper} p={PADDING.md}>
      <Box component='form'>
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
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
                        label={t('Mã giảm giá (nếu có)')}
                      />
                      <DropdownField
                        name='paymentMethod'
                        variant='outlined'
                        size='small'
                        label={t('Phương thức thanh toán')}
                        options={PaymentOptions}
                        getItemLabel={(item) => item.label}
                        getItemValue={(item) => item.value}
                      />

                      <NumberField
                        variant='outlined'
                        sizeField='small'
                        name='amountPaid'
                        label={t('Số tiền khách trả')}
                        onKeyDown={(e: any) => {
                          if (e.key === 'Enter') {
                            const value = e.target.value;
                            const totalPrice = convertMoneyToNumber(
                              methods.getValues('totalPrice'),
                            );
                            const amountPaid = convertMoneyToNumber(`${value},000`);
                            const amountChange = amountPaid - totalPrice;

                            methods.setValue('amountPaid', `${value},000`);
                            methods.setValue('amountChange', `${formatMoney(amountChange)}`);
                          } else {
                            const value = e.target.value || '';
                            if (value) {
                              const totalPrice = convertMoneyToNumber(
                                methods.getValues('totalPrice'),
                              );
                              const amountPaid = convertMoneyToNumber(`${value}`);
                              const amountChange = amountPaid - totalPrice;
                              console.log({ amountPaid, totalPrice, amountChange });

                              methods.setValue('amountPaid', `${amountPaid}`);
                              methods.setValue('amountChange', `-${amountChange}`);
                            }
                          }
                        }}
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
                      <NumberField
                        sizeField='small'
                        variant='outlined'
                        name='amountChange'
                        label={t('Tiền thối lại')}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box display='flex' justifyContent='flex-end'>
              <Button variant='contained' color='primary' onClick={methods.handleSubmit(onSubmit)}>
                {t('Tạo hóa đơn')}
              </Button>
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
}

export { Bill };
