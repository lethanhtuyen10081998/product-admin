import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { API, Actions, ActionsTypes, Sort, State } from './actions';
import {
  KeywordContext,
  LimitContext,
  LoadingContext,
  PageContext,
  SortContext,
  TotalContext,
  FilterObjectContext,
} from './hooksContext';

const initialState: State = {
  keyword: undefined,
  limit: 20,
  loading: false,
  page: 1,
  total: 0,
  sort: undefined,
};

const filterReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_CHANGE_KEYWORD:
      return { ...state, keyword: action.payload };

    case ActionsTypes.ON_UPDATE_LIMIT:
      return { ...state, limit: action.payload };

    case ActionsTypes.ON_UPDATE_PAGE:
      return { ...state, page: action.payload + 1 };

    case ActionsTypes.ON_UPDATE_SORT:
      return { ...state, sort: action.payload };

    case ActionsTypes.ON_UPDATE_TOTAL:
      return { ...state, total: action.payload };

    case ActionsTypes.UPDATE_LOADING:
      return { ...state, loading: action.payload };

    case ActionsTypes.ON_UPDATE_FILTER_OBJECT:
      return { ...state, filter: { ...state.filter, ...action.payload } };

    case ActionsTypes.ON_RESET_FILTER:
      return { ...state, filter: {} };

    default:
      return state;
  }
};

const FilterAPIContext = createContext<API>({} as API);

export const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onChangeKeyword = (payload?: string) => {
      dispatch({ type: ActionsTypes.ON_CHANGE_KEYWORD, payload });
    };

    const onUpdateLimit = (payload: number) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_LIMIT, payload });
    };

    const onUpdateLoading = (payload: boolean) => {
      dispatch({ type: ActionsTypes.UPDATE_LOADING, payload });
    };

    const onUpdatePage = (payload: number) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_PAGE, payload });
    };

    const onUpdateSort = (payload: Sort) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_SORT, payload });
    };

    const onUpdateTotal = (payload: number) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_TOTAL, payload });
    };

    const onUpdateFilterObject = (payload: Object) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_FILTER_OBJECT, payload });
    };

    const onResetFilterObject = () => {
      dispatch({ type: ActionsTypes.ON_RESET_FILTER });
    };

    return {
      onChangeKeyword,
      onUpdateLimit,
      onUpdateLoading,
      onUpdatePage,
      onUpdateSort,
      onUpdateTotal,
      onUpdateFilterObject,
      onResetFilterObject,
    };
  }, []);

  return (
    <FilterAPIContext.Provider value={actionContext}>
      <KeywordContext.Provider value={state.keyword}>
        <LimitContext.Provider value={state.limit}>
          <LoadingContext.Provider value={state.loading}>
            <PageContext.Provider value={state.page}>
              <SortContext.Provider value={state.sort}>
                <TotalContext.Provider value={state.total}>
                  <FilterObjectContext.Provider value={state.filter}>
                    {children}
                  </FilterObjectContext.Provider>
                </TotalContext.Provider>
              </SortContext.Provider>
            </PageContext.Provider>
          </LoadingContext.Provider>
        </LimitContext.Provider>
      </KeywordContext.Provider>
    </FilterAPIContext.Provider>
  );
};

export const useAPIFilter = () => useContext(FilterAPIContext);
