import { Data } from './types';

export enum ActionsTypes {
  ON_UPDATE_DATA = 'ON_UPDATE_DATA',
  ON_REFRESH_DATA = 'ON_REFRESH_DATA',
}

export type Actions =
  | {
      type: ActionsTypes.ON_UPDATE_DATA;
      payload: Data;
    }
  | {
      type: ActionsTypes.ON_REFRESH_DATA;
    };

export type API = {
  onUpdateData: (data: Data) => void;
  onRefreshData: () => void;
};

export interface State {
  data: Data;
}
