import { BoxProps } from '@material-ui/core';

export interface Props {
  tabs: Tab[];
  activeTab?: number;
  onChangeTab?(value?: string | number): void;
  tabProps?: BoxProps;
}

export interface Tab {
  label: string;
  component: React.ReactNode;
  value?: string | number;
}
