import { SelectPackageState, SET_PACKAGE, DELETE_PACKAGE } from './selectPackageType';
import { SelectPackageAction } from './selectPackageAction';

const initialState: SelectPackageState = {};

export function selectPackageReducer(
  state: SelectPackageState = initialState,
  action: SelectPackageAction,
): SelectPackageState {
  switch (action.type) {
    case SET_PACKAGE: {
      return {
        package: action.payload,
      };
    }

    case DELETE_PACKAGE:
      return { package: null };

    default:
      return state;
  }
}
