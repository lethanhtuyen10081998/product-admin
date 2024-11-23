import { serverSideAuthentication } from 'src/auth/session';
import Container from 'src/components/material/Container';
import AgencyDetail from 'src/components/page/agencyDetail';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import MainLayout from 'src/layout/MainLayout/MainLayout';

const AgencyDetailPage = () => {
  return (
    <Container>
      <FilterContextProvider>
        <AgencyDetail />
      </FilterContextProvider>
    </Container>
  );
};

export const getServerSideProps = serverSideAuthentication(async () => {
  return {
    props: {},
  };
});

AgencyDetailPage.Layout = MainLayout;

export default AgencyDetailPage;
