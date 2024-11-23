import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, State } from './actions';
import { OrderDetailContext } from './hooksContext';
import { Order } from 'src/types/order';

const initialState: State = {
  order: {} as Order,
};

const filterReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_UPDATE_ORDER_DETAIL:
      return { ...state, order: action.payload };

    default:
      return state;
  }
};

const OrdetDetailAPI = createContext<API>({} as API);

export const OrderDetailContextProvider: React.FC<{
  children: React.ReactNode;
  data: Order;
}> = ({ children, data }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    order: data,
  });

  const actionContext: API = useMemo(() => {
    const onUpdateOrderDetail = (payload: Order) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_ORDER_DETAIL, payload });
    };

    return {
      onUpdateOrderDetail,
    };
  }, []);

  return (
    <OrdetDetailAPI.Provider value={actionContext}>
      <OrderDetailContext.Provider value={state.order}>{children}</OrderDetailContext.Provider>
    </OrdetDetailAPI.Provider>
  );
};

export const useAPIOrderDetail = () => useContext(OrdetDetailAPI);
