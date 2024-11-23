import FormControl from '@mui/material/FormControl';
import * as React from 'react';

function FormControlIcon(props: any) {
  const { classes: customClasses, ...others } = props;
  return (
    <FormControl {...others} className={customClasses} fullWidth>
      {props.children}
    </FormControl>
  );
}

export default FormControlIcon;
