import { Backdrop as MuiBackdrop, Box, Typography } from '@mui/material';
import * as React from 'react';
import { Props } from './types';
import { RootState } from 'src/redux/types';
import { useSelector } from 'react-redux';

const Backdrop = (props: Props) => {
  const spinnerReducer = useSelector((state: RootState) => state.spinnerReducer);

  if (!props.show && !spinnerReducer.show && spinnerReducer.showCount === 0) {
    return null;
  }

  return (
    <MuiBackdrop sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }} open>
      <Box>
        <div className='loader' />
        <Typography sx={{ color: 'white' }}>{spinnerReducer.message}</Typography>
      </Box>
    </MuiBackdrop>
  );
};

export default Backdrop;
