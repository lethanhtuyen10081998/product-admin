import { createContext, useContext } from 'react';
import { State } from './actions';

export const SelectedProductContext = createContext<State['selectedProducts']>([]);
export const useSelectedProduct = () => useContext(SelectedProductContext);
