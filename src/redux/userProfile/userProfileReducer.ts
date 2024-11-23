import { UserProfileState, SET_USER_PROFILE } from './userProfileType';
import { UserProfileAction } from './userProfileAction';

const initialState: UserProfileState = null;

export function userProfileReducer(
  state: UserProfileState = initialState,
  action: UserProfileAction,
): UserProfileState {
  switch (action.type) {
    case SET_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
