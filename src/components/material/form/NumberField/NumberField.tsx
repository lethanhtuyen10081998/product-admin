import React from 'react';
import { Controller } from 'react-hook-form';
import { Props } from './types';
import NumberInput from '../../NumberInput';

const NumberField = (props: Props) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => {
        return (
          <NumberInput
            {...others}
            ref={ref}
            error={invalid || others.error}
            helperText={invalid ? error?.message || '' : helperText}
            value={value || ''}
            onChange={(e) => {
              onChange(e);
              others.onChange?.(e);
            }}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
};

export default NumberField;
