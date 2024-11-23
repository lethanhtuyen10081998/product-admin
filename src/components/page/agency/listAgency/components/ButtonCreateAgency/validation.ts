import { confirmPasswordSchema, passwordSchema, phoneNumberSchema } from 'src/commons/validation';
import * as yup from 'yup';

export const validation = yup.object({
  firstName: yup.string().required('Please enter first name'),
  lastName: yup.string().required('Please enter last name'),
  phone: phoneNumberSchema,
  email: yup.string().email('Email invalid!').required('Please enter Email'),
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});
