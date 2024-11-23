import { Props as AlertDialogProps } from '../alertDialog/types';
import { Dispatch, SetStateAction } from 'react';

export type AlertOptions = AlertDialogProps & {
  id: string;
};

export type AlertContainerHandler = {
  setAlertList: Dispatch<SetStateAction<AlertOptions[]>>;
};
