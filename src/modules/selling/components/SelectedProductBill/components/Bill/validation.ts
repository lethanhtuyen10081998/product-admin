import { convertMoneyToNumber } from 'src/libs/utils';
import * as yup from 'yup';

export const validation = yup.object({
  amountPaid: yup
    .string()
    .required('Please enter amount paid')
    .test('amountPaid', 'Amount paid must be greater than total price', function (value) {
      const totalPrice = convertMoneyToNumber(this.parent.totalPrice);
      if (!value || !totalPrice) return true;
      return Number(value.replace(/,/g, '')) >= totalPrice;
    }),
  amountChange: yup.string().required('Please enter amount change'),
  paymentMethod: yup.string().required('Please enter payment method'),
  totalQuantity: yup.number().required('Please enter total quantity'),
  totalPrice: yup.string().required('Please enter total price'),
});
