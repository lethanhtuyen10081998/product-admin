import { InputLabelProps, AutocompleteProps, ChipProps, InputProps } from '@mui/material';
import React from 'react';

export type Props<E> = Omit<
  AutocompleteProps<E, boolean | undefined, boolean | undefined, ChipProps<any, any>>,
  'renderInput'
> & {
  controlProps?: any;
  labelProps?: InputLabelProps;
  itemProps?: any;
  options: E[];
  getItemLabel?: (e: E) => React.ReactNode;
  getItemValue?: (e: E) => string | number;
  error?: boolean;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  required?: boolean;
  InputProps?: InputProps;
};
