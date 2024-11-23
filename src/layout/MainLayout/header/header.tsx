import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import Breadcrum from './components/Breadcrum';
import CurrentTime from './components/currentTime';
import ProfileMenu from './components/profileMenu';
import { HeaderProps } from './types';
import { PADDING } from 'src/constants/grid';
import LanguageSwitcher from 'src/components/ui/LanguageSwitcher';

function Header(_props: HeaderProps) {
  const renderMenuButton = () => {
    const icon = (
      <IconButton
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          color: (theme) => theme.palette.common.black,
        }}
        aria-label='Expaned Menu'
      >
        <MenuOpenIcon
          sx={{
            transition: (theme) => theme.transitions.create(['transform']),
          }}
        />
      </IconButton>
    );

    return icon;
  };

  return (
    <Toolbar
      sx={{
        position: 'relative',
        padding: PADDING,
      }}
    >
      <Grid container alignItems='center'>
        <Grid item xs>
          <Box display='flex' alignItems='center'>
            {renderMenuButton()}

            <Breadcrum />
          </Box>
        </Grid>
        <Grid item xs>
          <Box display='flex' alignItems='center'>
            <CurrentTime />
          </Box>
        </Grid>
        <Grid item>
          <Box display='flex' alignItems='center' gap={2}>
            <LanguageSwitcher />
            <ProfileMenu />
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Header;
