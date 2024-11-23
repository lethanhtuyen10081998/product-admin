import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import DebtLimitPage from 'src/components/page/settings/debtLimit';
import { Routes } from 'src/constants/route';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const DebtLimit = () => {
  const { t } = useTranslation('debt-limit');

  const { onSetBreadcrum } = useLayoutAPI();
  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('debt_limit'),
        link: Routes.RECHARGE,
      },
    ]);
  }, [onSetBreadcrum, t]);

  return (
    <>
      <Head>
        <title>{t('debt_limit')}</title>
      </Head>
      <FilterContextProvider>
        <Container>
          <DebtLimitPage />
        </Container>
      </FilterContextProvider>
    </>
  );
};

DebtLimit.Layout = MainLayout;

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

export default DebtLimit;
