import { createContext, useContext } from 'react';
import { State } from './actions';
import { Order } from 'src/types/order';

export const OrderDetailContext = createContext<State['order']>({} as Order);
export const useOrderDetailContext = () => useContext(OrderDetailContext);
