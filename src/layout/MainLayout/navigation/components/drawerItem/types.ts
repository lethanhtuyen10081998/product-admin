import { ReactNode } from 'react';

export type DrawerItemProps = {
  title: string;
  icon: ReactNode;
  showDivider?: boolean;
  route?: string;
  show?: boolean;
  module?: string;
  subItems: Array<{
    title: string;
    icon?: ReactNode;
    route: string;
    module?: string;
  }>;
};
