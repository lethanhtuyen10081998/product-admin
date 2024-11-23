import { CircularProgress } from '@mui/material';
import * as React from 'react';
import { Props } from './types';

const Spinner = (props: Props) => {
  return <CircularProgress color='primary' {...props} />;
};

export default Spinner;
