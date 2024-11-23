/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';
import PlusOne from '@mui/icons-material/Add';

export const Plus = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props}>
    <PlusOne />
  </SvgIcon>
);

export const PlusCircle = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props}>
    <PlusOne />
  </SvgIcon>
);
