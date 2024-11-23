import { createStyles, makeStyles } from '@mui/material';

export default makeStyles((theme: any) =>
  createStyles({
    header: {
      width: 'auto',
    },
    toolbarRoot: {},
    iconButtonRoot: {},
    boxTime: {},
    positionFixed: {
      left: 0,
    },
    appBarRoot: {},
    menuOpenIconRoot: {},
    menuOpenIcon: {
      transform: 'rotate(180deg)',
    },
    warningText: {
      color: theme.colors.matchingPercent30,
    },
    infoText: {
      color: theme.colors.matchingPercent100,
    },
    successText: {
      color: theme.colors.matchingPercent100,
    },
    icon: {
      marginRight: theme.spacing(0.5),
      fontSize: theme.spacing(2),
    },
    boxScore: {
      marginTop: 2,

      '& .MuiChip-root': {
        transform: 'scale(0.8)',
      },
    },
  }),
);
