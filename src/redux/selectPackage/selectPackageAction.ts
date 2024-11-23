import { SET_PACKAGE, DELETE_PACKAGE } from './selectPackageType';

export interface SetPackageAction {
  type: typeof SET_PACKAGE;
  payload?: any;
}

export interface DeletePackageAction {
  type: typeof DELETE_PACKAGE;
}

export type SelectPackageAction = SetPackageAction | DeletePackageAction;
