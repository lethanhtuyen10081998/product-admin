import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import PermissionManagement from 'src/components/pages/permissionManagement';
import { Routes } from 'src/constants/route';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const Page = () => {
  const { t } = useTranslation('home');
  const { onSetBreadcrum } = useLayoutAPI();

  useEffect(() => {
    onSetBreadcrum([{ label: 'Permission Management', link: Routes.HOME }]);
  }, [onSetBreadcrum]);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Box display='grid'>
        <PermissionManagement />
      </Box>
    </>
  );
};

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

Page.Layout = MainLayout;

export default Page;
