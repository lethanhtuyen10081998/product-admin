export enum PaymentMethod {
  CASH = 'cash',
  BANK = 'bank',
  CREDIT = 'credit',
  OTHER = 'other',
}

export type PaymentStatus = 'pending' | 'paid' | 'failed';

export const PaymentOptions = [
  { label: 'Tiền mặt', value: PaymentMethod.CASH },
  { label: 'Chuyển khoản', value: PaymentMethod.BANK },
  { label: 'Thẻ tín dụng', value: PaymentMethod.CREDIT },
  { label: 'Khác', value: PaymentMethod.OTHER },
];
