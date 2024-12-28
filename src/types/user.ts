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
    actions: string[];
  }[];
};

export enum Role {
  SELLER = 'seller',
  AGENCY = 'agency',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

export const ModulesName = {
  USER: 'user',
  ROLE: 'role',
  PERMISSION: 'permission',
  ORDER: 'order',
  PRODUCT: 'product',
  SELL: 'sell',
  DASHBOARD: 'dashboard',
  PERMISSION_MANAGEMENT: 'permission_management',
};

export const ActionForModules = {
  USER: ['create', 'update', 'delete'],
  ROLE: ['create', 'update', 'delete'],
  PERMISSION: ['create', 'update', 'delete'],
  ORDER: ['create', 'update', 'delete', 'print', 'export'],
  PRODUCT: ['create', 'update', 'delete', 'print', 'export'],
  SELL: ['create', 'update', 'delete', 'print', 'export'],
  DASHBOARD: ['read'],
  PERMISSION_MANAGEMENT: ['create', 'update', 'delete'],
};

export const permissions: Permission[] = [
  {
    role: Role.SELLER,
    permissions: [
      { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
      { module: ModulesName.SELL, actions: ActionForModules.SELL },
    ],
  },
  {
    role: Role.ADMIN,
    permissions: [
      { module: ModulesName.ORDER, actions: ActionForModules.ORDER },
      { module: ModulesName.PRODUCT, actions: ActionForModules.PRODUCT },
      { module: ModulesName.DASHBOARD, actions: ActionForModules.DASHBOARD },
    ],
  },
  {
    role: Role.SUPER_ADMIN,
    //ALL permissions
    permissions: [],
  },
];
