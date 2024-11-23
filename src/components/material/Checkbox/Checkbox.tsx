import {
  Checkbox as MaterialCheckbox,
  FormControl,
  FormControlLabel,
  Typography,
} from '@mui/material';
import React from 'react';
import { Props } from './types';
import FormHelperText from '../FormHelperText';

export default function Checkbox(props: Props) {
  const { label, checked, onChange, onBlur, error, helperText, ...others } = props;

  return (
    <FormControl error={!!error} sx={{ position: 'relative' }}>
      <FormControlLabel
        control={
          <MaterialCheckbox
            onChange={onChange}
            checked={checked}
            onBlur={onBlur}
            {...others}
            color='primary'
            sx={{ position: 'absolute', top: 0, zIndex: 10000 }}
          />
        }
        label={<Typography sx={{ mt: '12px', ml: 5 }}>{label}</Typography>}
      />
      <FormHelperText sx={{ mt: 1 }} error={error}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}
