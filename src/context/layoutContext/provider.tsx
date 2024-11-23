import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, Breadcrumb, State } from './actions';
import { BreadcrumbContext } from './hooksContext';

const initialState: State = {
  breadcrumbs: [],
};

const filterReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_SET_BREADCRUM:
      return { ...state, breadcrumbs: action.payload };

    default:
      return state;
  }
};

const LayoutAPIContext = createContext<API>({} as API);

export const LayoutContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onSetBreadcrum = (payload: Breadcrumb[]) => {
      dispatch({ type: ActionsTypes.ON_SET_BREADCRUM, payload });
    };

    return {
      onSetBreadcrum,
    };
  }, []);

  return (
    <LayoutAPIContext.Provider value={actionContext}>
      <BreadcrumbContext.Provider value={state.breadcrumbs}>{children}</BreadcrumbContext.Provider>
    </LayoutAPIContext.Provider>
  );
};

export const useLayoutAPI = () => useContext(LayoutAPIContext);
