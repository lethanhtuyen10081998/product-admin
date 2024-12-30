export type UserProfile = {
  username: string;
  userInfo: UserInfo;
  phone: string;
  permission: Permission;
};

export type UserInfo = {
  avatar: string;
  dob: string;
  first_name: string;
  gender: number;
  last_name: string;
  user_id: string;
};

export type Permission = {
  role: string;
  permissions: {
    module: string;
    actions: ActionEnum[];
  }[];
};

export enum UserRole {
  SELLER = 'seller',
  AGENCY = 'agency',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

export enum ModulesName {
  USER = 'user',
  ROLE = 'role',
  PERMISSION = 'permission',
  ORDER = 'order',
  PRODUCT = 'product',
  SELL = 'sell',
  DASHBOARD = 'dashboard',
  PERMISSION_MANAGEMENT = 'permission_management',
  STOCK = 'stock',
  IMPORT_STOCK = 'stock.import',
  EXPORT_STOCK = 'stock.export',
}

export enum ActionEnum {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  PRINT = 'print',
  EXPORT = 'export',
  READ = 'read',
  IMPORT = 'import',
}

export const ActionForModules = {
  USER: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
  ROLE: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
  PERMISSION: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
  ORDER: [
    ActionEnum.CREATE,
    ActionEnum.UPDATE,
    ActionEnum.DELETE,
    ActionEnum.PRINT,
    ActionEnum.EXPORT,
  ],
  PRODUCT: [
    ActionEnum.CREATE,
    ActionEnum.UPDATE,
    ActionEnum.DELETE,
    ActionEnum.PRINT,
    ActionEnum.EXPORT,
  ],
  SELL: [
    ActionEnum.CREATE,
    ActionEnum.UPDATE,
    ActionEnum.DELETE,
    ActionEnum.PRINT,
    ActionEnum.EXPORT,
  ],
  DASHBOARD: [ActionEnum.READ],
  PERMISSION_MANAGEMENT: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
  STOCK: [ActionEnum.CREATE, ActionEnum.UPDATE, ActionEnum.DELETE],
};

export const permissions: Permission[] = [
  {
    role: UserRole.SELLER,
    permissions: [
      { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
      { module: ModulesName.SELL, actions: ActionForModules.SELL },
    ],
  },
  {
    role: UserRole.ADMIN,
    permissions: [
      { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
      { module: ModulesName.PRODUCT, actions: ActionForModules.PRODUCT },
      { module: ModulesName.DASHBOARD, actions: ActionForModules.DASHBOARD },
    ],
  },
  {
    role: UserRole.SUPER_ADMIN,
    //ALL permissions
    permissions: [],
  },
];
