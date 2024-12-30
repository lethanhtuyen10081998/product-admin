import { createContext, useContext } from 'react';
import { State } from './actions';
import { QueryObserverResult } from '@tanstack/react-query';

export const DataContext = createContext<State['data']>({
  rows: [],
  total: 0,
});
export const useData = () => useContext(DataContext);

// eslint-disable-next-line max-len
export const RefreshDataContext = createContext<State['refreshData']>(() => Promise.resolve({} as QueryObserverResult<any, Error>));
export const useRefreshData = () => useContext(RefreshDataContext);
