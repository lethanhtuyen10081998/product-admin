import { Box, Grid, Paper, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import DateField from 'src/components/material/form/DateField';
import EmailField from 'src/components/material/form/EmailField';
import FormTextField from 'src/components/material/form/FormTextField';
import { PADDING, SPACING } from 'src/constants/grid';
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import { Agency } from 'src/types/agency';
import AutoCompleteAgencyLevelCommission from 'src/components/ui/AutoCompleteAgencyLevelCommission';
import AutoCompleteAgencyDebtLimit from 'src/components/ui/AutoCompleteAgencyDebt';
import useUpdateAgency from 'src/services/agency/update';
import { useRouter } from 'next/router';
import { validation } from './validation';
import { SignFormRequest } from './types';
import OverlayBox from 'src/components/ui/OverlayBox';

export default function AgencyInfo({ data, isFetching }: { data: Agency; isFetching: boolean }) {
  const { t } = useTranslation('agencys-detail');
  const router = useRouter();
  const { mutation, loading } = useUpdateAgency();

  const resolver = useYupValidationResolver(validation);
  const methods = useForm<SignFormRequest>({
    resolver,
    defaultValues: {
      firstName: data.user.info?.first_name,
      lastName: data.user.info?.last_name,
      birthday: data.user.info?.dob ? new Date(data.user.info?.dob as string) : null,
      email: data.user.username,
      agencyDebtLimitId: data?.debtLimit || null,
      commission: data?.commission || 0,
    },
  });

  useEffect(() => {
    methods.setValue('agencyDebtLimitId', data.debtLimit);
  }, [data.debtLimit, methods]);

  const handleSubmit = useCallback(
    (values: SignFormRequest) => {
      mutation(router.query.id as string, {
        agencyDebtLimitId: values.agencyDebtLimitId?.id || '',
        commission: Number(values.commission),
      });
    },
    [mutation, router.query.id],
  );

  return (
    <Box sx={{ position: 'relative', display: 'grid', gap: SPACING }} component={Paper} p={PADDING}>
      <OverlayBox show={isFetching || loading} />
      <Box>
        <Typography variant='h4'>{t('agency_information')}</Typography>
      </Box>
      <Box>
        <FormProvider {...methods}>
          <Box>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <FormTextField name='firstName' label={t('common:first_name')} disabled />
              </Grid>

              <Grid item sm={3}>
                <FormTextField label={t('common:last_name')} name='lastName' disabled />
              </Grid>

              <Grid item sm={3}>
                <EmailField name='email' disabled label={t('Email')} />
              </Grid>

              <Grid item sm={3}>
                {/* <DateField
                    name="birthday"
                    label={t("common:birthday")}
                    disabled
                  /> */}
              </Grid>

              <Grid item sm={3}>
                <AutoCompleteAgencyLevelCommission
                  name='commission'
                  label='Commission'
                  level={data.level}
                />
              </Grid>

              <Grid item sm={3}>
                <AutoCompleteAgencyDebtLimit
                  name='agencyDebtLimitId'
                  label={t('common:debit_limit')}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                label={t('common:update')}
                type='submit'
                onClick={methods.handleSubmit(handleSubmit)}
                loading={loading}
              />
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
}
