import { useModuleContext } from 'src/context/moduleContext/hooksContext';
import { usePermissionContext } from 'src/context/permissionContext/hooksContext';
import { ModulesName, ActionEnum } from 'src/types/user';

const CheckinPermission = ({
  children,
  module,
  actions,
}: {
  children: React.ReactNode;
  module?: ModulesName;
  actions: ActionEnum[];
}) => {
  const contextModule = useModuleContext();
  const selectedModule = module || contextModule;
  const { permissions } = usePermissionContext();

  const permission = permissions.find((permission) => permission.module === selectedModule);

  if (!permission || !permission.actions.length) {
    return null;
  }

  if (permission.actions.some((action) => actions.includes(action))) {
    return <div>{children}</div>;
  }

  return null;
};

export default CheckinPermission;
