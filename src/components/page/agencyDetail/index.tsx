import { Box, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spinner from 'src/components/material/Spinner';
import { SPACING } from 'src/constants/grid';
import { Routes } from 'src/constants/route';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import useAgencyDetail from 'src/services/agency/getAgencyDetail';
import AgencyInfo from './components/AgencyInfo/AgencyInfo';
import TabViewTable from './components/TabViewTable';

const AgencyDetail = () => {
  const { t } = useTranslation('agencys-detail');
  const router = useRouter();
  const { data, isLoading, isFetching } = useAgencyDetail({ id: router.query.id as string });
  const { onSetBreadcrum } = useLayoutAPI();

  useEffect(() => {
    if (data) {
      onSetBreadcrum([
        {
          label: t('agencys:title'),
          link: Routes.LIST_AGENCY,
        },
        {
          label: [data?.user.info?.first_name, data?.user.info?.last_name].join(' '),
        },
      ]);
    }
  }, [data, onSetBreadcrum, t]);

  if (isLoading) {
    return (
      <Box display='flex' justifyContent='center'>
        <Spinner />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{[data.user.info?.first_name, data.user.info?.last_name].join(' ')}</title>
      </Head>
      <Grid container columnSpacing={SPACING} rowSpacing={SPACING}>
        <Grid item sm={12}>
          <AgencyInfo data={data} isFetching={isFetching} />
        </Grid>

        <Grid item sm={12}>
          <TabViewTable userId={data.user_id} />
        </Grid>
      </Grid>
    </>
  );
};

export default AgencyDetail;
