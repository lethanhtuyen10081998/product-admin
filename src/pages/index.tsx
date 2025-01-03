import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Dashboard from 'src/components/pages/dashboard';
import { Routes } from 'src/constants/route';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const Home = () => {
  const { t } = useTranslation('home');
  const { onSetBreadcrum } = useLayoutAPI();

  useEffect(() => {
    onSetBreadcrum([{ label: 'Dashboard', link: Routes.HOME }]);
  }, [onSetBreadcrum]);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Box display='grid'>
        <Dashboard />
      </Box>
    </>
  );
};

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

Home.Layout = MainLayout;

export default Home;
