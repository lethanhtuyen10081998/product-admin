import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Icon } from 'src/components/icons';
import { Routes } from 'src/constants/route';
import Header from './header/header';
import Navigation from './navigation/navigation';
import { LayoutContextProvider } from 'src/context/layoutContext/provider';
import { Paper } from '@mui/material';
import { ProfileContextProvider } from 'src/context/profileContext/provider';
import { DrawerItemProps } from './navigation/components/drawerItem/types';
import useTranslation from 'next-translate/useTranslation';
import { DataContextProvider } from 'src/context/dataContext/provider';
import { FilterContextProvider } from 'src/context/filterContext/provider';
import { PermissionContextProvider } from 'src/context/permissionContext/provider';
import { useCollapsible } from 'src/context/layoutContext/hooksContext';
import { usePermissionContext } from 'src/context/permissionContext/hooksContext';
import { ModulesName } from 'src/types/user';

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

function ResponsiveDrawer(props: Props) {
  const { t } = useTranslation('common');
  const collapsible = useCollapsible();
  const drawerWidth = collapsible ? 110 : 260;

  const { permissions } = usePermissionContext();

  let drawerItems: DrawerItemProps[] = [
    {
      icon: <Icon name='home' />,
      route: Routes.HOME,
      title: t('menu.sell'),
      subItems: [],
      module: ModulesName.DASHBOARD,
    },

    {
      icon: <Icon name='order' />,
      route: Routes.ORDER_LIST,
      title: t('menu.order'),
      subItems: [],
      module: ModulesName.ORDER,
    },

    {
      icon: <Icon name='group' />,
      route: Routes.SELLING,
      title: t('menu.sell'),
      subItems: [],
      module: ModulesName.SELL,
    },

    {
      icon: <Icon name='rotate' />,
      route: Routes.PRODUCT_LIST,
      title: t('menu.products'),
      subItems: [],
      module: ModulesName.PRODUCT,
    },

    {
      icon: <Icon name='support' />,
      title: t('menu.management'),
      subItems: [
        {
          icon: <Icon name='account' />,
          route: Routes.PERMISSION_MANAGEMENT,
          title: t('menu.permission'),
          module: ModulesName.PERMISSION_MANAGEMENT,
        },
      ],
      module: ModulesName.PERMISSION_MANAGEMENT,
    },

    {
      icon: <Icon name='stock' />,
      route: Routes.STOCK,
      title: t('menu.stock'),
      subItems: [
        {
          icon: <Icon name='account' />,
          route: Routes.IMPORT_STOCK,
          title: t('menu.import_stock'),
          module: ModulesName.IMPORT_STOCK,
        },
      ],
      module: ModulesName.STOCK,
    },

    {
      icon: <Icon name='stock' />,
      route: Routes.SUPPLIER,
      title: t('Nhà cung cấp'),
      subItems: [],
      module: ModulesName.SUPPLIER,
    },
  ];

  drawerItems = drawerItems.filter((item) =>
    permissions.some(
      (permission) => permission.module === item.module && permission.actions.length > 0,
    ),
  );
  const { children } = props;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        position='fixed'
        sx={{
          left: 0,
          width: { sm: `calc(100% - ${drawerWidth + 48}px)` },
          transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out',
          transform: 'translate3d(0, 0, 0)',
          ml: { sm: `${drawerWidth + 24}px` },
          background: '#eaeff1',
          zIndex: 1000,
        }}
      >
        <Box
          mt={3}
          sx={{
            backgroundColor: (theme) => theme.palette.common.white,
          }}
          component={Paper}
        >
          <Header />
        </Box>
      </Box>

      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant='temporary'
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <Navigation drawerItems={drawerItems} />
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: '#eaeff1',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Box mt={6}>{children}</Box>
      </Box>
    </Box>
  );
}
const MainLayoutContainer = (props: Props) => {
  return (
    <PermissionContextProvider>
      <FilterContextProvider>
        <DataContextProvider>
          <ProfileContextProvider>
            <LayoutContextProvider>
              <ResponsiveDrawer {...props} />
            </LayoutContextProvider>
          </ProfileContextProvider>
        </DataContextProvider>
      </FilterContextProvider>
    </PermissionContextProvider>
  );
};

export default MainLayoutContainer;
