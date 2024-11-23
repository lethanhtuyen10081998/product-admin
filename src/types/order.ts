import { ProductCardType } from './product';
import { User } from './recharge';

export type OrderHistory = {
  id: string;
  createAt: string;
  updateAt: string;
  amount: number;
  active: number;
  account_id: string;
  discount: number;
  payment_status: number;
  note: string;
  items: OrderHistoryItem[];
};

export type OrderHistoryItem = {
  id: string;
  createAt: string;
  updateAt: string;
  package_id: string;
  order_id: string;
  price: number;
  discount: number;
  quantity: number;
  booking_id: string;
  sim_id: string;
  qr_code: string;
  status: number;
  package: ProductCardType;
};

export interface OrderItem {
  id: string;
  createAt?: Date;
  updateAt?: Date;
  package_id?: string;
  order_id?: string;
  price?: number;
  discount?: null;
  quantity?: number;
  booking_id?: string;
  sim_id?: string;
  qr_code?: string;
  status: OrderStatus;
  active_date?: null;
  email_order?: null;
  type_order?: null;
  old_sim_id?: null;
  sim_type?: null;
  package?: Package;
  order?: Order;
}

export interface Order {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  amount?: number;
  active?: null;
  account_id?: string;
  agency_id?: string;
  discount?: number;
  origin_amount?: number;
  commission?: number;
  payment_status: OrderStatus;
  note?: string;
  email_order?: null;
  items?: Item[];
  user?: User;
}

export interface Item {
  id?: string;
  createAt?: Date;
  updateAt?: Date;
  package_id?: string;
  order_id?: string;
  price?: number;
  discount?: null;
  quantity?: number;
  booking_id?: string;
  sim_id?: null;
  qr_code?: null;
  status?: OrderStatus;
  active_date?: null;
  email_order?: null;
  type_order?: null;
  old_sim_id?: null;
  sim_type?: null;
  package?: Package;
}

export interface Package {
  productid?: string;
  vsku?: null;
  sku?: string;
  provider?: string;
  description?: string;
  price_to_forfun?: number;
  price_to_app?: number;
  price_to_ctv?: number;
  price_to_partner?: number;
  for_type?: string;
  xplori_productid?: number;
  code?: string;
  country?: string;
  validity?: string;
  data?: string;
  vi_description?: null;
  flag?: string;
  popular?: null;
  group?: string;
  dataVal?: number;
  haravan?: Haravan;
}

export interface Haravan {
  sku?: string;
  imgs?: string;
  body_html?: string;
  haravan_id?: number;
  handle?: string;
  link?: string;
  price?: number;
}

export enum OrderStatus {
  NOT_PAYMENTED = 0,
  PAYMENTED = 1,
  REFUND_SUCCESS = -1,
  REFUND_NOT_SUCCESS = -2,
}

export const OrderStatusLabel = {
  [OrderStatus.NOT_PAYMENTED]: 'unpaid',
  [OrderStatus.PAYMENTED]: 'paid',
  [OrderStatus.REFUND_SUCCESS]: 'refund_success',
  [OrderStatus.REFUND_NOT_SUCCESS]: 'refund_not_success',
};

export const ValueStatusByLabel = {
  [OrderStatusLabel[OrderStatus.NOT_PAYMENTED]]: OrderStatus.NOT_PAYMENTED,
  [OrderStatusLabel[OrderStatus.PAYMENTED]]: OrderStatus.PAYMENTED,
  [OrderStatusLabel[OrderStatus.REFUND_SUCCESS]]: OrderStatus.REFUND_SUCCESS,
  [OrderStatusLabel[OrderStatus.REFUND_NOT_SUCCESS]]: OrderStatus.REFUND_NOT_SUCCESS,
};

export const orderStatusOptions = [
  {
    label: OrderStatusLabel[OrderStatus.NOT_PAYMENTED],
    value: OrderStatusLabel[OrderStatus.NOT_PAYMENTED],
  },

  {
    label: OrderStatusLabel[OrderStatus.PAYMENTED],
    value: OrderStatusLabel[OrderStatus.PAYMENTED],
  },

  {
    label: OrderStatusLabel[OrderStatus.REFUND_SUCCESS],
    value: OrderStatusLabel[OrderStatus.REFUND_SUCCESS],
  },

  {
    label: OrderStatusLabel[OrderStatus.REFUND_NOT_SUCCESS],
    value: OrderStatusLabel[OrderStatus.REFUND_NOT_SUCCESS],
  },
];
