import { SHOW_SPINNER, HIDE_SPINNER } from './spinnerType';

export interface ShowSpinnerAction {
  type: typeof SHOW_SPINNER;
  message?: string;
}

export interface HideSpinnerAction {
  type: typeof HIDE_SPINNER;
}

export type SpinnerAction = ShowSpinnerAction | HideSpinnerAction;
