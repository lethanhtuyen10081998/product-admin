import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import OrderDetail from 'src/components/page/orderDetail';
import { Routes } from 'src/constants/route';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const OrderDetailPage = () => {
  const { t } = useTranslation('order-detail');
  const { onSetBreadcrum } = useLayoutAPI();
  const router = useRouter();

  const orderId = t('order', {
    id: (router.query.id as string).substring(0, 7),
  });

  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('orders'),
        link: Routes.ORDER_LIST,
      },
      {
        label: orderId,
      },
    ]);
  }, [onSetBreadcrum, orderId, t]);

  return (
    <>
      <Head>
        <title>{orderId}</title>
      </Head>
      <Container>
        <OrderDetail />
      </Container>
    </>
  );
};

OrderDetailPage.Layout = MainLayout;

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

export default OrderDetailPage;
