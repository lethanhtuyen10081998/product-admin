import { createContext, useContext } from 'react';
import { ModulesName, } from 'src/types/user';


export interface State {
  module?: ModulesName;
}

export const ModuleContext = createContext<State['module']>(undefined);
export const useModuleContext = () => useContext(ModuleContext);
