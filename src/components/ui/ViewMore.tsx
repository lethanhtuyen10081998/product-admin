import { Box } from '@mui/material';
import React from 'react';
import { Icon } from '../icons';
import NextLink from '../material/NextLink';
import { Routes } from 'src/constants/route';

const ViewMore = () => {
  return (
    <Box display='flex' gap={1}>
      <Icon name='view-all' />
      <NextLink href={Routes.PRODUCTS}>Xem tất cả</NextLink>
    </Box>
  );
};

export default ViewMore;
