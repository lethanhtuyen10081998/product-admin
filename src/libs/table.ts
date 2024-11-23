import { OrderStatus } from 'src/types/order';

export const getRowClassNameTableOrder = (status: OrderStatus) => {
  if (status === OrderStatus.NOT_PAYMENTED) {
    return 'row-error';
  }

  if (status === OrderStatus.REFUND_NOT_SUCCESS) {
    return 'row-refund-not-success';
  }

  return '';
};
