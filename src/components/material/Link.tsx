import React, { FC } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

const StyledLink: FC<
  LinkProps & {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
    target?: string;
  }
> = ({ children, sx = {}, ...props }) => {
  return (
    <NextLink
      {...props}
      passHref
      style={{
        textDecoration: 'none',
      }}
    >
      {children}
    </NextLink>
  );
};

export default StyledLink;
