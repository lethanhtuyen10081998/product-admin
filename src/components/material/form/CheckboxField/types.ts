import React from 'react';
import { FormControlLabelProps } from '@mui/material';
import { Props as CheckboxProps } from 'src/components/material/Checkbox';

export type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'onChange' | 'onBlur'> & {
    label?: string | React.ReactNode;
    name: string;
  };
