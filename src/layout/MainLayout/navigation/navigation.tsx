import { Box, Divider, List, Typography } from '@mui/material';
import DrawerItem from './components/drawerItem/drawerItem';
import { LayoutProps } from './types';
import ProfileView from './components/ProfileView';

function Navigation(props: LayoutProps) {
  const { drawerItems } = props;

  return (
    <>
      <Box px={4} py={3}>
        <Typography fontWeight='bold' variant='h4'>
          Forfun Store
        </Typography>
      </Box>
      <Box px={2}>
        <Divider />
      </Box>

      <ProfileView />

      <Box px={2}>
        <Divider />
      </Box>

      <Box px={2}>
        <List>
          {drawerItems.map((item) => (
            <DrawerItem key={item.title} {...item} />
          ))}
        </List>
      </Box>
    </>
  );
}

export default Navigation;
