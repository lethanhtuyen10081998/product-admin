import React from 'react';
import Box from '@mui/material/Box';

import { BoxProps } from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export interface Props {
  index: number;
  value: number;
  children?: React.ReactNode;
  props?: BoxProps;
}

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      component={Paper}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      sx={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      {value === index && <Box {...other.props}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
