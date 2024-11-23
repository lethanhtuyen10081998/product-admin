import React, { FC } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  subtitle: string | React.ReactNode;
  title: React.ReactNode;
  icon?: React.ReactNode;
}

const Statistic: FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {icon}
      <Typography variant='h5'>{title}</Typography>
      <Typography noWrap variant='overline' sx={{ textTransform: 'uppercase' }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Statistic;
