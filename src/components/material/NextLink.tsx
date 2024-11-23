import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { Box, SxProps } from '@mui/material';

export type Props = LinkProps & {
  children: React.ReactNode;
  sx?: SxProps;
  target?: React.HTMLAttributeAnchorTarget;
};

const NextLink: FC<Props> = ({ children, href, ...others }) => {
  return (
    <Link
      className='link'
      href={href || ''}
      style={{
        textDecoration: 'none',
      }}
      {...others}
    >
      <Box
        component='strong'
        sx={{
          textDecoration: 'none',
          ...others.sx,
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default NextLink;
