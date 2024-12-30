import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, State } from './actions';
import { SelectedProductContext } from './hooksContext';
import { QueryObserverResult } from '@tanstack/react-query';
import { Product } from 'src/types/product';

const initialState: State = {
  selectedProducts: [],
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_SELECTED_PRODUCT: {
      return { ...state, selectedProducts: [...state.selectedProducts, action.payload] };
    }

    default:
      return state;
  }
};

const APIContext = createContext<API>({} as API);
export const useAPISelectedProductContext = () => useContext(APIContext);

export const SelectedProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onSelectedProduct = (payload: Product) => {
      dispatch({ type: ActionsTypes.ON_SELECTED_PRODUCT, payload });
    };

    return {
      onSelectedProduct,
    };
  }, []);

  return (
    <APIContext.Provider value={actionContext}>
      <SelectedProductContext.Provider value={state.selectedProducts}>
        {children}
      </SelectedProductContext.Provider>
    </APIContext.Provider>
  );
};
