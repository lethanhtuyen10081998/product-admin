import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { Props } from './types';
import TextField from '../TextField';

type CustomProps = Props & {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(function TextMaskCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      radix='.'
      mask={Number}
      signed={false}
      thousandsSeparator=','
      normalizeZeros={true}
      padFractionalZeros={true}
      scale={0}
      autofix={true}
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
    />
  );
});

const NumberInput = (props: Props) => {
  return (
    <TextField
      {...props}
      size={props.sizeField}
      InputProps={{
        inputComponent: TextMaskCustom as any,
        ...props.InputProps,
      }}
    />
  );
};
export default NumberInput;
