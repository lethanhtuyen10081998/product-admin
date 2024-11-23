import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import OrderInformation from './components/OrderInformation';
import useOrderDetail from 'src/services/order/getOrderDetail';
import { useRouter } from 'next/router';
import Spinner from 'src/components/material/Spinner';
import { OrderDetailContextProvider } from './context/provider';
import TableProductOrder from './components/TableProductOrder';
import { SPACING } from 'src/constants/grid';

const OrderDetail = () => {
  const { mutation, loading, data } = useOrderDetail();
  const router = useRouter();

  useEffect(() => {
    mutation({ id: router.query.id as string });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);

  if (loading) {
    return (
      <Box display='flex' justifyContent='center'>
        <Spinner />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box display='flex' justifyContent='center'>
        No data
      </Box>
    );
  }

  return (
    <OrderDetailContextProvider data={data.data}>
      <Box display='grid' gap={SPACING}>
        <OrderInformation />

        <TableProductOrder />
      </Box>
    </OrderDetailContextProvider>
  );
};

export default OrderDetail;
