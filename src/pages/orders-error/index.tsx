import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import OrdersError from 'src/components/page/orderError';
import { Routes } from 'src/constants/route';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const OrdersPage = () => {
  const { t } = useTranslation('orders-error');
  const { onSetBreadcrum } = useLayoutAPI();
  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('title'),
        link: Routes.RECHARGE,
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
          <OrdersError />
        </Container>
      </FilterContextProvider>
    </>
  );
};

OrdersPage.Layout = MainLayout;

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

export default OrdersPage;
