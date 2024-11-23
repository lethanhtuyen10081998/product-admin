import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { ProfileContext } from './hooksContext';
import { API, Actions, ActionsTypes, State } from './actions';
import { UserProfile } from 'src/types/user';

const initialState: State = {
  data: {
    loading: false,
    profile: undefined,
  },
};

const filterReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_UPDATE_LOADING:
      return {
        ...state,
        data: {
          ...state.data,
          loading: action.payload,
        },
      };

    case ActionsTypes.ON_UPDATE_PROFILE:
      return {
        ...state,
        data: {
          ...state.data,
          profile: action.payload,
        },
      };

    default:
      return state;
  }
};

const ProfileAPIContext = createContext<API>({} as API);

export const ProfileContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onUpdateLoading = (payload: boolean) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_LOADING, payload });
    };

    const onUpdateProfile = (payload: UserProfile) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_PROFILE, payload });
    };

    return {
      onUpdateLoading,
      onUpdateProfile,
    };
  }, []);

  return (
    <ProfileAPIContext.Provider value={actionContext}>
      <ProfileContext.Provider value={state.data}>{children}</ProfileContext.Provider>
    </ProfileAPIContext.Provider>
  );
};

export const useProfileAPI = () => useContext(ProfileAPIContext);
