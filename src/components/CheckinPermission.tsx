import { usePermissionContext } from 'src/context/permissionContext/hooksContext';

const CheckinPermission = ({
  children,
  module,
  actions,
}: {
  children: React.ReactNode;
  module: string;
  actions: string[];
}) => {
  const { permissions } = usePermissionContext();

  const permission = permissions.find((permission) => permission.module === module);

  if (!permission || !permission.actions.length) {
    return null;
  }

  if (permission.actions.some((action) => actions.includes(action))) {
    return <div>{children}</div>;
  }

  return null;
};

export default CheckinPermission;
