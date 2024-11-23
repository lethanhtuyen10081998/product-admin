import React from 'react';
import { Controller } from 'react-hook-form';
import Dropdown from 'src/components/material/Dropdown';
import { Props } from './types';

const DropdownField = <E extends unknown = string | number>(props: Props<E>) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (
        <Dropdown
          {...others}
          inputRef={ref}
          error={invalid}
          helperText={invalid ? error?.message || '' : helperText}
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default DropdownField;
