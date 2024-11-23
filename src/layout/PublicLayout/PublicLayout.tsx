import React from 'react';

import { Box } from '@mui/material';

const PublicLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Box sx={{ position: 'relative', background: '#eeeeee' }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {children}
    </Box>
  </Box>
);

export default PublicLayout;
