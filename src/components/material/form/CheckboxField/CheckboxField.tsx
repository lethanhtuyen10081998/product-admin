import React from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from 'src/components/material/Checkbox';
import { Props } from './types';

const CheckGroupField = (props: Props) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <Checkbox
          {...others}
          checked={value}
          error={invalid}
          helperText={invalid ? error?.message || '' : helperText}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default CheckGroupField;
