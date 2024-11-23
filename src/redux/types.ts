import { CartState } from './cart/cartType';
import { SelectPackageState } from './selectPackage/selectPackageType';
import { SpinnerState } from './spinner/spinnerType';
import { UserProfileState } from './userProfile/userProfileType';

export interface RootState {
  spinnerReducer: SpinnerState;
  userProfileReducer: UserProfileState;
  cartReducer: CartState;
  selectPackageReducer: SelectPackageState;
}
