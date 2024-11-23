// import PersonIcon from "@mui/icons-material/Person";
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { Box } from '@mui/material';
import { Icon } from 'src/components/icons';
import useLogout from 'src/services/auth/logout';

export default function LongMenu() {
  const { mutation } = useLogout();

  const handleClick = () => {
    mutation();
  };

  return (
    <Box display='flex' alignItems='center' gap={3}>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-haspopup='true'
        color='inherit'
        onClick={handleClick}
        sx={{ background: (theme) => theme.palette.background.paper }}
      >
        <Icon name='logout' />
      </IconButton>
    </Box>
  );
}
