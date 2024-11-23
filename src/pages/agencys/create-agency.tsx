import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import CreateAgency from 'src/components/page/agency/createAgency';
import { Routes } from 'src/constants/route';
import { useLayoutAPI } from 'src/context/layoutContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const CreateAgencyPage = () => {
  const { t } = useTranslation('agencys');
  const { onSetBreadcrum } = useLayoutAPI();
  useEffect(() => {
    onSetBreadcrum([
      {
        label: t('title'),
        link: Routes.LIST_AGENCY,
      },
      {
        label: t('create_agency'),
        link: '',
      },
    ]);
  }, [onSetBreadcrum, t]);

  return (
    <>
      <Head>
        <title>{t('create_agency')}</title>
      </Head>

      <Container>
        <CreateAgency />
      </Container>
    </>
  );
};

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

CreateAgencyPage.Layout = MainLayout;

export default CreateAgencyPage;
