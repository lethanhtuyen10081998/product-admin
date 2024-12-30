import React from 'react';
import { ModulesName } from 'src/types/user';
import { ModuleContext } from './hooksContext';

export const ModuleContextProvider: React.FC<{
  children: React.ReactNode;
  module?: ModulesName;
}> = ({ children, module }) => {
  return <ModuleContext.Provider value={module}>{children}</ModuleContext.Provider>;
};
