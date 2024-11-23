import React from 'react';

import MaterialTextField from '@mui/material/TextField';

import { Props } from './types';
import useTranslation from 'next-translate/useTranslation';

export const TextField = (props: Props) => {
  const { t } = useTranslation();
  const { error, helperText, counter, ...others } = props;

  return (
    <MaterialTextField
      margin='normal'
      fullWidth
      {...others}
      error={error}
      sx={{
        ...props.sx,
      }}
      helperText={t(helperText as string)}
      variant='standard'
    />
  );
};

export default TextField;
