import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Icon } from 'src/components/icons';
import { PADDING, SPACING } from 'src/constants/grid';
import { formatMoney } from 'src/libs/utils';
import LineAxisIcon from '@mui/icons-material/LineAxis';

const Statistics = () => {
  const data = [
    {
      label: 'Revenue',
      total: 157040000,
      color: '#f8fef9',
      icon: <LineAxisIcon />,
      rate: 8.9,
    },

    {
      label: 'Order',
      total: 157,
      color: '#cce7fe',
      icon: <Icon name='cart' sx={{ color: 'primary.main' }} />,
      rate: 14,
    },
  ];

  return (
    <Grid container spacing={SPACING}>
      {data.map((item) => (
        <Grid item xl={2} lg={3} key={item.label}>
          <Box
            component={Paper}
            padding={PADDING}
            sx={{ backgroundColor: item.color }}
            display='grid'
            gap={2}
          >
            <Box display='flex' justifyContent='space-between'>
              <Typography variant='h5'>{item.label}</Typography>
              {item.icon}
            </Box>
            <Typography variant='h4' color='success.main'>
              {formatMoney(item.total)}
            </Typography>

            <Box display='flex' alignItems='center'>
              <Icon name='up' sx={{ width: 18, color: 'success.main' }} />

              <Box display='flex' alignItems='center' gap={0.5}>
                <Typography color='success.main'>{item.rate}%</Typography>
                <Typography> vs last month</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistics;
