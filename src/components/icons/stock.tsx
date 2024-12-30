/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

export const Stock = (props: SvgIconProps): JSX.Element => (
  <SvgIcon
    {...props}
    viewBox='0 0 15 15'
    width='24'
    height='24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    id='warehouse'
  >
    <path
      d='M13.5,5c-0.0762,0.0003-0.1514-0.0168-0.22-0.05L7.5,2L1.72,4.93C1.4632,5.0515,1.1565,4.9418,1.035,4.685&#xA;&#x9;S1.0232,4.1215,1.28,4L7.5,0.92L13.72,4c0.2761,0.0608,0.4508,0.3339,0.39,0.61C14.0492,4.8861,13.7761,5.0608,13.5,5z M5,10H2v3h3&#xA;&#x9;V10z M9,10H6v3h3V10z M13,10h-3v3h3V10z M11,6H8v3h3V6z M7,6H4v3h3V6z'
    />
  </SvgIcon>
);
