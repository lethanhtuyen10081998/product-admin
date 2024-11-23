import { SpinnerState, SHOW_SPINNER, HIDE_SPINNER } from './spinnerType';
import { SpinnerAction } from './spinnerAction';

const initialState: SpinnerState = {
  show: false,
  showCount: 0,
  message: '',
};

export function spinnerReducer(
  state: SpinnerState = initialState,
  action: SpinnerAction,
): SpinnerState {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        show: true,
        showCount: state.showCount + 1,
        message: action.message,
      };
    }

    case HIDE_SPINNER:
      return {
        ...state,
        show: false,
        showCount: state.showCount > 0 ? state.showCount - 1 : 0,
      };

    default:
      return state;
  }
}
