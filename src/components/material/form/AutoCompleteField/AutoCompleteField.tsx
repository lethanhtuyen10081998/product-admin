import React from 'react';
import { Controller } from 'react-hook-form';
import AutoComplete from 'src/components/material/AutoComplete';
import { Props } from './types';

const AutoCompleteField = <E extends unknown = string | number>(props: Props<E>) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <AutoComplete
          {...others}
          error={invalid}
          helperText={invalid ? error?.message || '' : helperText}
          value={value}
          onChange={(_e, newVal) => onChange(newVal)}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default AutoCompleteField;
