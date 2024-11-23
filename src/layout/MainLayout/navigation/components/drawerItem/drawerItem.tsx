/* eslint-disable max-len */
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { DrawerItemProps } from './types';
import NextLink from 'src/components/material/NextLink';
import { useRouter } from 'next/router';

export default function DrawerItem(props: DrawerItemProps) {
  const { icon, title, showDivider } = props;
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const route = 'route' in props ? props.route : null;
  const subItems = 'subItems' in props ? props.subItems : null;

  const isActive = useCallback(
    (route: string) => {
      const path = `/${router.pathname.split('/').slice(1).join('/')}`;
      return (
        path === route ||
        (router.pathname.split('/')[1] === route.split('/')[1] && subItems?.length === 0)
      );
    },
    [router.pathname, subItems?.length],
  );

  useEffect(() => {
    if (subItems?.some((it) => isActive(it.route))) {
      setIsCollapsed(false);
    }
  }, [isActive, subItems]);

  return (
    <>
      {showDivider && (
        <Box my={2}>
          <Divider />
        </Box>
      )}
      {subItems?.length ? (
        <ListItemButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{
            background: (theme) =>
              isActive(route || '') ? theme.palette.primary.main : theme.palette.common.white,
            color: (theme) =>
              isActive(route || '') ? theme.palette.primary.contrastText : theme.palette.grey[900],
            ':hover': {
              color: (theme) =>
                isActive(route || '')
                  ? theme.palette.primary.contrastText
                  : theme.palette.grey[900],
              background: (theme) =>
                isActive(route || '') ? theme.palette.primary.main : theme.palette.common.white,
            },
            ':active': {
              ':hover': {
                color: 'white',
              },
            },
            borderRadius: '8px',
            boxShadow: isActive(route || '')
              ? '0 1px 5px 0 rgba(0, 92, 199, 0.42), 0 3px 1px -2px rgba(0, 92, 199, 0.12), 0 2px 4px 0 rgba(0, 92, 199, 0.2)'
              : 'none',
          }}
        >
          <ListItemIcon
            sx={{
              color: (theme) =>
                isActive(route || '')
                  ? theme.palette.primary.contrastText
                  : theme.palette.grey[400],
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={{
              textTransform: 'capitalize',
            }}
          />
          {subItems?.length ? isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon /> : null}
        </ListItemButton>
      ) : (
        <NextLink href={route || ''}>
          <ListItemButton
            sx={{
              background: (theme) =>
                isActive(route || '') ? theme.palette.primary.main : theme.palette.common.white,
              color: (theme) =>
                isActive(route || '')
                  ? theme.palette.primary.contrastText
                  : theme.palette.grey[900],
              ':hover': {
                color: (theme) =>
                  isActive(route || '')
                    ? theme.palette.primary.contrastText
                    : theme.palette.grey[900],
                background: (theme) =>
                  isActive(route || '') ? theme.palette.primary.main : theme.palette.common.white,
              },
              ':active': {
                ':hover': {
                  color: 'white',
                },
              },
              borderRadius: '8px',
              boxShadow: isActive(route || '')
                ? '0 1px 5px 0 rgba(0, 92, 199, 0.42), 0 3px 1px -2px rgba(0, 92, 199, 0.12), 0 2px 4px 0 rgba(0, 92, 199, 0.2)'
                : 'none',
            }}
          >
            <ListItemIcon
              sx={{
                color: (theme) =>
                  isActive(route || '')
                    ? theme.palette.primary.contrastText
                    : theme.palette.grey[400],
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{
                textTransform: 'capitalize',
              }}
            />
            {subItems?.length ? isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon /> : null}
          </ListItemButton>
        </NextLink>
      )}
      {subItems && (
        <Collapse in={!isCollapsed} unmountOnExit>
          <List
            disablePadding
            sx={{
              marginLeft: 2,
            }}
          >
            {subItems.map((it) => (
              <NextLink href={it.route || ''} key={it.route}>
                <ListItemButton
                  sx={{
                    background: (theme) =>
                      isActive(it.route || '')
                        ? theme.palette.primary.main
                        : theme.palette.common.white,
                    color: (theme) =>
                      isActive(it.route || '')
                        ? theme.palette.primary.contrastText
                        : theme.palette.grey[900],
                    ':hover': {
                      color: (theme) =>
                        isActive(it.route || '')
                          ? theme.palette.primary.contrastText
                          : theme.palette.grey[900],
                      background: (theme) =>
                        isActive(it.route || '')
                          ? theme.palette.primary.main
                          : theme.palette.common.white,
                    },
                    ':active': {
                      ':hover': {
                        color: 'white',
                      },
                    },
                    borderRadius: '8px',
                    boxShadow: isActive(it.route || '')
                      ? '0 1px 5px 0 rgba(0, 92, 199, 0.42), 0 3px 1px -2px rgba(0, 92, 199, 0.12), 0 2px 4px 0 rgba(0, 92, 199, 0.2)'
                      : 'none',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: (theme) =>
                        isActive(it.route || '')
                          ? theme.palette.primary.contrastText
                          : theme.palette.grey[400],
                    }}
                  >
                    {it.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={it.title}
                    sx={{
                      textTransform: 'capitalize',
                    }}
                  />
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
