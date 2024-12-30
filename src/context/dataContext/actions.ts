import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { Data } from './types';

export enum ActionsTypes {
  ON_UPDATE_DATA = 'ON_UPDATE_DATA',
  ON_REFRESH_DATA = 'ON_REFRESH_DATA',
}

export type RefetchFunction = (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>>;

export type Actions =
  | {
    type: ActionsTypes.ON_UPDATE_DATA;
    payload: Data;
  }
  | {
    type: ActionsTypes.ON_REFRESH_DATA;
    payload: RefetchFunction;
  };

export type API = {
  onUpdateData: (data: Data) => void;
  onSetFunctionRefreshData: (func: RefetchFunction) => void;
};

export interface State {
  data: Data;
  refreshData: RefetchFunction;
}
