import Box from '@mui/material/Box';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';
import Container from 'src/components/material/Container';
import useTranslation from 'next-translate/useTranslation';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import { Routes } from 'src/constants/route';
import CommissionsPage from 'src/components/page/settings/commission';

const Commission = () => {
  const { t } = useTranslation('commissions');
  const { onSetBreadcrum } = useLayoutAPI();

  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('title'),
        link: Routes.SETTING_COMMISSION,
      },
    ]);
  }, [onSetBreadcrum, t]);

  return (
    <Box>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <FilterContextProvider>
        <Container>
          <CommissionsPage />
        </Container>
      </FilterContextProvider>
    </Box>
  );
};

Commission.Layout = MainLayout;

export default Commission;
