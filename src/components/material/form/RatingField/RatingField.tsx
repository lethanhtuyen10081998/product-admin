import React from 'react';
import { Controller } from 'react-hook-form';
import { Props } from './types';
import Rating from 'src/components/material/Rating';

const RatingField = (props: Props) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => {
        return (
          <Rating
            {...others}
            error={invalid || false}
            helperText={invalid ? error?.message || '' : helperText}
            value={value || 0}
            onChange={onChange}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
};

export default RatingField;
