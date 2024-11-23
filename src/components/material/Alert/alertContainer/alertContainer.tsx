import React, { useImperativeHandle, useState } from 'react';
import AlertDialog from '../alertDialog';
import { AlertOptions } from './types';
import { alertContainerRef } from 'src/helpers/alertUtil';

const AlertContainer = () => {
  const [alertList, setAlertList] = useState<AlertOptions[]>([]);

  useImperativeHandle(
    alertContainerRef,
    () => ({
      setAlertList,
    }),
    [],
  );

  return (
    <>
      {alertList.map((al) => (
        <AlertDialog key={al.id} {...al} />
      ))}
    </>
  );
};

export default AlertContainer;
