import { Box, DialogContent, FormHelperText, Grid } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { AlertAction, Props } from './types';
import Dialog from '../../Dialog';
import Button from '../../Button';
import useTranslation from 'next-translate/useTranslation';

const AlertDialog = (props: Props) => {
  const {
    title,
    description,
    content,
    onResult,
    validate,
    yesNo = false,
    variant = 'info',
    showCancelButton = true,
    confirmButtonText = yesNo ? 'common:yes' : 'common:ok',
    cancelButtonText = yesNo ? 'common:no' : 'common:cancel',
    fullWidth = true,
  } = props;

  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const submit = useCallback(
    async (action: AlertAction) => {
      if (action === AlertAction.CANCEL || action === AlertAction.CLOSE) {
        setOpen(false);
        onResult?.({ action });
      } else {
        try {
          const data = await validate?.();
          setOpen(false);
          setErrorMsg('');
          onResult?.({ action, data });
        } catch (error: any) {
          setErrorMsg(error.message);
        }
      }
    },
    [onResult, validate],
  );

  const handleClose = useCallback(() => submit(AlertAction.CLOSE), [submit]);
  const handleCancel = useCallback(() => submit(AlertAction.CANCEL), [submit]);

  return (
    <Dialog
      maxWidth='xs'
      fullWidth
      open={open}
      onClose={handleClose}
      footer={
        <Grid container spacing={2}>
          {showCancelButton && (
            <Grid item xs>
              <Button fullWidth={fullWidth} variant='text' onClick={handleCancel}>
                {t(cancelButtonText)}
              </Button>
            </Grid>
          )}

          <Grid item xs>
            <Button
              variant='contained'
              fullWidth={fullWidth}
              onClick={() => submit(AlertAction.CONFIRM)}
              color='error'
            >
              {t(confirmButtonText)}
            </Button>
          </Grid>
        </Grid>
      }
      title={title}
    >
      {description && <Box sx={{ padding: 0, textAlign: 'center' }}>{description}</Box>}

      {!!content && <Box mb={{ xs: 2, md: 4 }}>{content}</Box>}

      {!!errorMsg && <FormHelperText error>{errorMsg}</FormHelperText>}
    </Dialog>
  );
};

export default AlertDialog;
