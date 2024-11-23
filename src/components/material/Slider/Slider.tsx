import { Slider as MaterialSlider } from '@mui/material';
import React from 'react';
import FormHelperText from '../FormHelperText/FormHelperText';
import { Props } from './types';

export const Slider = (props: Props) => {
  const { error, helperText, ...others } = props;
  return (
    <>
      <MaterialSlider
        {...others}
        sx={{
          ...props.sx,
        }}
      />
      <FormHelperText error={error}>{helperText || ''}</FormHelperText>
    </>
  );
};

export default Slider;
