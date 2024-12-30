import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, RefetchFunction, State } from './actions';
import { DataContext, RefreshDataContext } from './hooksContext';
import { Data } from './types';
import { QueryObserverResult } from '@tanstack/react-query';

const initialState: State = {
  data: {
    rows: [],
    total: 0,
  },
  refreshData: () => Promise.resolve({} as QueryObserverResult<any, Error>),
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_UPDATE_DATA: {
      return { ...state, data: action.payload };
    }
    case ActionsTypes.ON_REFRESH_DATA: {
      return { ...state, refreshData: action.payload };
    }

    default:
      return state;
  }
};

const APIContext = createContext<API>({} as API);

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onUpdateData = (payload: Data) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_DATA, payload });
    };

    const onSetFunctionRefreshData = (payload: RefetchFunction) => {
      dispatch({ type: ActionsTypes.ON_REFRESH_DATA, payload });
    };

    return {
      onUpdateData,
      onSetFunctionRefreshData,
    };
  }, []);

  return (
    <APIContext.Provider value={actionContext}>
      <RefreshDataContext.Provider value={state.refreshData}>
        <DataContext.Provider value={{ rows: state.data.rows, total: state.data.total }}>
          {children}
        </DataContext.Provider>
      </RefreshDataContext.Provider>
    </APIContext.Provider>
  );
};

export const useAPIDataContext = () => useContext(APIContext);
