import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, State } from './actions';
import { DataContext } from './hooksContext';
import { Data } from './types';

const initialState: State = {
  data: {
    rows: [],
    total: 0,
  },
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_UPDATE_DATA: {
      return { data: action.payload };
    }

    default:
      return state;
  }
};

const APIContext = createContext<API>({} as API);

export const DataContextProvider = ({
  children,
  onGetData,
  data,
  total,
}: {
  children: React.ReactNode;
  onGetData(): void;
  data: any[];
  total: number;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onUpdateData = (payload: Data) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_DATA, payload });
    };

    const onRefreshData = () => {
      onGetData();
    };

    return {
      onUpdateData,
      onRefreshData,
    };
  }, [onGetData]);

  useEffect(() => {
    actionContext.onUpdateData({ rows: data, total });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, total]);

  return (
    <APIContext.Provider value={actionContext}>
      <DataContext.Provider value={{ rows: state.data.rows, total: state.data.total }}>
        {children}
      </DataContext.Provider>
    </APIContext.Provider>
  );
};

export const useAPIData = () => useContext(APIContext);
