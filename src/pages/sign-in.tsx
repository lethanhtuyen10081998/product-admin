import { Box } from '@mui/material';
import Head from 'next/head';
import { serverSideUnAuthentication } from 'src/auth/session';
import SignIn from 'src/components/pages/auth/signIn';
import PublicLayout from 'src/layout/PublicLayout/PublicLayout';

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Box maxWidth={450}>
        <SignIn />
      </Box>
    </>
  );
};

SignInPage.Layout = PublicLayout;

export const getServerSideProps = serverSideUnAuthentication(async () => {
  return {
    props: {},
  };
});

export default SignInPage;
