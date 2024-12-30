import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { PermissionContext } from './hooksContext';
import { API, Actions, ActionsTypes, State } from './actions';
import { ActionEnum, ActionForModules, ModulesName, Permission, UserRole } from 'src/types/user';

export const SELLER_PERMISSION = {
  role: UserRole.SELLER,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: [ActionEnum.CREATE] },
    { module: ModulesName.SELL, actions: [ActionEnum.CREATE] },
  ],
};

export const AGENCY_PERMISSION = {
  role: UserRole.AGENCY,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: ['read'] },
    { module: ModulesName.SELL, actions: ['read'] },
  ],
};

export const ADMIN_PERMISSION = {
  role: UserRole.ADMIN,
  permissions: [
    { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
    { module: ModulesName.PRODUCT, actions: [ActionEnum.READ] },
    {
      module: ModulesName.SELL,
      actions: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
    },
    {
      module: ModulesName.PERMISSION_MANAGEMENT,
      actions: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
    },
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
