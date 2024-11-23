import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import TableAgency from 'src/components/page/agency/listAgency';
import { Routes } from 'src/constants/route';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const AgencysPage = () => {
  const { t } = useTranslation('agencys');
  const { onSetBreadcrum } = useLayoutAPI();

  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('title'),
        link: Routes.LIST_AGENCY,
      },
    ]);
  }, [onSetBreadcrum, t]);

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <FilterContextProvider>
        <Container>
          <TableAgency />
        </Container>
      </FilterContextProvider>
    </>
  );
};

AgencysPage.Layout = MainLayout;

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

export default AgencysPage;
