export enum ActionsTypes {
  ON_SET_BREADCRUM = 'ON_SET_BREADCRUM',
}

export type Actions = {
  type: ActionsTypes.ON_SET_BREADCRUM;
  payload: Breadcrumb[];
};

export type API = {
  onSetBreadcrum: (value: Breadcrumb[]) => void;
};

export interface State {
  breadcrumbs: Breadcrumb[];
}

export type Breadcrumb = {
  label: string;
  link?: string;
};
