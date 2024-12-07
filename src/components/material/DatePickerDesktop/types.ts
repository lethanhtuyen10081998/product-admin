import { Noop } from 'react-hook-form';
import { MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';
import { SxProps } from '@mui/material';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';
import { DateValidationError } from '@mui/x-date-pickers';

export type Props<TDate> = Omit<
  MobileDatePickerProps<TDate>,
  'renderInput' | 'onChange' | 'value'
> & {
  onChange?(value: TDate | null, context: PickerChangeHandlerContext<DateValidationError>): void;
  value?: TDate | null;
  error?: boolean;
  helperText?: string;
  onBlur?: Noop;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps;
};
