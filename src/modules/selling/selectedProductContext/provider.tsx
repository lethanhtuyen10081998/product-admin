import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { Product } from 'src/types/product';
import { API, Actions, ActionsTypes, State } from './actions';
import { SelectedProductContext } from './hooksContext';

const initialState: State = {
  selectedProducts: [],
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_SELECTED_PRODUCT: {
      const isExist = state.selectedProducts.find((product) => product.id == action.payload.id);

      if (isExist) {
        return {
          ...state,
          selectedProducts: state.selectedProducts.map((product) => {
            if (product.id == action.payload.id) {
              return { ...product, quantity: product.quantity + action.payload.quantity };
            }
            return product;
          }),
        };
      }

      return { ...state, selectedProducts: [...state.selectedProducts, action.payload] };
    }
    case ActionsTypes.ON_UPDATE_QUANTITY: {
      return {
        ...state,
        selectedProducts: state.selectedProducts.map((product) => {
          if (product.id == action.payload.id) {
            return { ...product, quantity: action.payload.amount };
          }
          return product;
        }),
      };
    }
    case ActionsTypes.ON_REMOVE_PRODUCT: {
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (product) => product.id != action.payload.id,
        ),
      };
    }
    case ActionsTypes.ON_CLEAR_PRODUCT: {
      return { ...state, selectedProducts: [] };
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

    const onUpdateQuantity = (payload: { id: string; amount: number }) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_QUANTITY, payload });
    };

    const onRemoveProduct = (payload: { id: string }) => {
      dispatch({ type: ActionsTypes.ON_REMOVE_PRODUCT, payload });
    };

    const onClearProduct = () => {
      dispatch({ type: ActionsTypes.ON_CLEAR_PRODUCT });
    };

    return {
      onSelectedProduct,
      onUpdateQuantity,
      onRemoveProduct,
      onClearProduct,
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
