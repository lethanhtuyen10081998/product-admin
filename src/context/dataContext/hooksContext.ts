import { createContext, useContext } from 'react';
import { State } from './actions';

export const DataContext = createContext<State['data']>({
  rows: [],
  total: 0,
});
export const useData = () => useContext(DataContext);
