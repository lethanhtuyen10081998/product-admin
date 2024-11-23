import * as yup from 'yup';

export const passwordSchema = yup
  .string()
  .label('Password')
  .matches(
    /(?=.*[a-z])(?=.*[A-Z])/,
    ({ label }) =>
      `${label} must contain both uppercase and lowercase characters (e.g., a-z and A-Z)`,
  )
  .matches(/.*\d/, ({ label }) => `${label} must contain at least one number (e.g., 0-9)`)
  .matches(
    /.*[-_!@#$%^&*.,?]/,
    ({ label }) => `${label} must contain at least one special character (e.g., !@#$, etc.)`,
  )
  .min(8, ({ label }) => `${label} must be at least eight characters in length (Longer is better)`)
  .max(20, ({ label }) => `${label} length must not exceed 20 characters`)
  .required(({ label }) => `${label} is required`);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords do not match')
  .required('Confirm password is required');

export const emailSchema = yup
  .string()
  .email('Invalid email address')
  .trim()
  .required('Email is required');

export const phoneNumberSchema = yup
  .string()
  .required('common:enter_phone_number')
  .matches(/^\d{4}\ \d{3} \d{3}$/, 'common:invalid_phone_number');
