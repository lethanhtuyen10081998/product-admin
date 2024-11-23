import React, { FC } from 'react';

import ContainerMaterial, { ContainerProps } from '@mui/material/Container';

const Container: FC<ContainerProps> = ({ children, ...others }) => {
  return <ContainerMaterial {...others}>{children}</ContainerMaterial>;
};

export default Container;
