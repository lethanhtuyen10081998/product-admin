import { Box, Grid, Paper, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/material/Button';
import CheckboxField from 'src/components/material/form/CheckboxField';
import DateField from 'src/components/material/form/DateField';
import DropdownField from 'src/components/material/form/DropdownField';
import TextField from 'src/components/material/form/FormTextField';
import { PADDING, SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { OrderFilter } from 'src/services/order/getListOrder';
import { orderStatusOptions, ValueStatusByLabel } from 'src/types/order';
const column = 12 / 5;

export type FilterOrderForm = {
  orderId?: string;
  fullname?: string;
  email?: string;

  userId?: string;
  from?: string | null;
  to?: string | null;
  date?: string | null;
  status?: string | null;
  isRefund?: boolean;
};

const FilterForm = () => {
  const { t } = useTranslation('orders');
  const methods = useForm<FilterOrderForm>({
    defaultValues: {},
  });

  const { onUpdateFilterObject, onResetFilterObject } = useAPIFilter();

  const handleSubmit = useCallback(
    (values: FilterOrderForm) => {
      const filter: OrderFilter = {
        status: values.status ? Number(ValueStatusByLabel[values?.status]) : undefined,
        email: values?.email,
        order_id: values?.orderId,
        user_name: values?.fullname,
        user_id: values?.userId,
        date: values?.date,
        from: values?.from,
        to: values?.to,
        isRefund: values?.isRefund,
      };

      onUpdateFilterObject(filter);
    },
    [onUpdateFilterObject],
  );

  const handleReset = () => {
    methods.reset({ status: null, date: null, from: null, to: null });
    onResetFilterObject();
  };

  return (
    <Box component={Paper} padding={PADDING} display='flex' width={1}>
      <Box width={1}>
        <FormProvider {...methods}>
          <Box
            component='form'
            onSubmit={methods.handleSubmit(handleSubmit)}
            display='grid'
            gap={1}
          >
            <Box display='grid'>
              <Typography color='primary'>Order Infomation</Typography>
              <Grid container columnSpacing={2}>
                <Grid item sm={column}>
                  <TextField name='orderId' label={t('FilterForm.order_id')} />
                </Grid>
                <Grid item sm={column}>
                  <DropdownField
                    name='status'
                    label={t('common:status')}
                    options={orderStatusOptions}
                    getItemLabel={(item) => t(`common:${item.label}`)}
                    getItemValue={(item) => item.value}
                  />
                </Grid>
                <Grid item sm={column}>
                  <DateField name='date' label={t('FilterForm.order_date')} />
                </Grid>

                <Grid item sm={column}>
                  <DateField name='from' label={t('common:from_date')} />
                </Grid>

                <Grid item sm={column}>
                  <DateField name='to' label={t('common:to_date')} />
                </Grid>

                <Grid item sm={column}>
                  <CheckboxField name='isRefund' label={t('FilterForm.refund_order')} />
                </Grid>
              </Grid>
            </Box>

            <Box display='grid'>
              <Typography color='primary'>User Infomation</Typography>
              <Grid container spacing={2}>
                <Grid item sm={column}>
                  <TextField name='userId' label={t('FilterForm.user_id')} />
                </Grid>

                <Grid item sm={column}>
                  <TextField name='fullname' label={t('FilterForm.user_fullname')} />
                </Grid>

                <Grid item sm={column}>
                  <TextField name='email' label={t('common:email')} />
                </Grid>
              </Grid>
            </Box>

            <Box display='flex'>
              <Box
                display='flex'
                ml='auto'
                alignItems='center'
                justifyContent='end'
                gap={2}
                width={400}
              >
                <Button type='submit'>{t('common:search')}</Button>
                <Button variant='text' onClick={handleReset}>
                  {t('common:reset')}
                </Button>
              </Box>
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default FilterForm;
