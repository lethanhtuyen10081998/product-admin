import { GridSortDirection } from '@mui/x-data-grid/models/gridSortModel';

export enum ActionsTypes {
  ON_CHANGE_KEYWORD = 'ON_CHANGE_KEYWORD',
  ON_UPDATE_DATA = 'ON_UPDATE_DATA',
  ON_UPDATE_TOTAL = 'ON_UPDATE_TOTAL',
  UPDATE_LOADING = 'UPDATE_LOADING',
  ON_UPDATE_PAGE = 'ON_UPDATE_PAGE',
  ON_UPDATE_LIMIT = 'ON_UPDATE_LIMIT',
  ON_UPDATE_SORT = 'ON_UPDATE_SORT',
  ON_UPDATE_FILTER_OBJECT = 'ON_UPDATE_FILTER_OBJECT',
  ON_RESET_FILTER = 'ON_RESET_FILTER',
}

export type Actions =
  | {
    type: ActionsTypes.ON_CHANGE_KEYWORD;
    payload?: string;
  }
  | {
    type: ActionsTypes.ON_UPDATE_TOTAL;
    payload: number;
  }
  | {
    type: ActionsTypes.UPDATE_LOADING;
    payload: boolean;
  }
  | {
    type: ActionsTypes.ON_UPDATE_PAGE;
    payload: number;
  }
  | {
    type: ActionsTypes.ON_UPDATE_LIMIT;
    payload: number;
  }
  | {
    type: ActionsTypes.ON_UPDATE_SORT;
    payload: Sort;
  }
  | {
    type: ActionsTypes.ON_UPDATE_FILTER_OBJECT;
    payload: Object;
  }
  | {
    type: ActionsTypes.ON_RESET_FILTER;
  };

export type API = {
  onChangeKeyword: (value?: string) => void;
  onUpdateTotal: (value: number) => void;
  onUpdateLoading: (value: boolean) => void;
  onUpdatePage: (value: number) => void;
  onUpdateLimit: (value: number) => void;
  onUpdateSort: (value: Sort) => void;
  onUpdateFilterObject: (value: Object) => void;
  onResetFilterObject: () => void;
};

export type Sort = {
  by: GridSortDirection;
  field: string;
};

export interface State {
  keyword?: string;
  total: number;
  loading: boolean;
  page: number;
  limit: number;
  sort?: Sort;
  filter?: Object;
}
