import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { PermissionContext } from './hooksContext';
import { API, Actions, ActionsTypes, State } from './actions';
import { ActionForModules, ModulesName, Permission, Role } from 'src/types/user';

export const SELLER_PERMISSION = {
  role: Role.SELLER,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: ['read'] },
    { module: ModulesName.SELL, actions: ['read'] },
  ],
};

export const AGENCY_PERMISSION = {
  role: Role.AGENCY,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: ['read'] },
    { module: ModulesName.SELL, actions: ['read'] },
  ],
};

export const ADMIN_PERMISSION = {
  role: Role.ADMIN,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: ['read'] },
    { module: ModulesName.SELL, actions: ['read'] },
    { module: ModulesName.PERMISSION_MANAGEMENT, actions: ['create', 'update', 'delete'] },
  ],
};

const initialState: State = {
  permission: ADMIN_PERMISSION,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionsTypes.ON_UPDATE_PERMISSION:
      return {
        ...state,
        permission: action.payload,
      };

    default:
      return state;
  }
};

const APIContext = createContext<API>({} as API);
export const usePermissionAPIContext = () => useContext(APIContext);

export const PermissionContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const actionContext: API = useMemo(() => {
    const onUpdatePermission = (payload: Permission) => {
      dispatch({ type: ActionsTypes.ON_UPDATE_PERMISSION, payload });
    };

    return {
      onUpdatePermission,
    };
  }, []);

  return (
    <APIContext.Provider value={actionContext}>
      <PermissionContext.Provider value={state.permission}>{children}</PermissionContext.Provider>
    </APIContext.Provider>
  );
};
