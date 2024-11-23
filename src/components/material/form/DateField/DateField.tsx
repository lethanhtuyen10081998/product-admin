import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'src/components/material/DatePicker';
import { Props } from './types';

const DateField = <E extends unknown>(props: Props<E>) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (
        <DatePicker
          {...others}
          inputRef={ref}
          error={invalid}
          helperText={invalid ? error?.message || '' : helperText}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default DateField;
