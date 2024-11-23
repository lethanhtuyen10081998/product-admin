import { Order } from 'src/types/order';

export enum ActionsTypes {
  ON_UPDATE_ORDER_DETAIL = 'ON_UPDATE_ORDER_DETAIL',
}

export type Actions = {
  type: ActionsTypes.ON_UPDATE_ORDER_DETAIL;
  payload: Order;
};

export type API = {
  onUpdateOrderDetail: (value: Order) => void;
};

export interface State {
  order: Order;
}
