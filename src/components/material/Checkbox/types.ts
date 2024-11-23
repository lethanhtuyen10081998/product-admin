import React from 'react';
import { CheckboxProps, FormControlLabelProps } from '@mui/material';

export type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'onChange' | 'onBlur'> & {
    label?: string | React.ReactNode;
    error?: boolean;
    helperText?: React.ReactNode;
  };
