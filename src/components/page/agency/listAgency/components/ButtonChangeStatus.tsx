import { MenuItem } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { AlertAction } from 'src/components/material/Alert/alertDialog/types';
import useSnackbar from 'src/components/material/Snackbar/useSnackbar';
import { useAPIData } from 'src/context/dataContext/provider';
import alertUtil from 'src/helpers/alertUtil';
import useSpinner from 'src/hooks/useSpinner';
import useChangeStatusAgency from 'src/services/agency/changeStatus';
import { AgencyStatus } from 'src/types/agency';

const ButtonChangeStatus = ({ userId, status }: { userId: string; status: AgencyStatus }) => {
  const { t } = useTranslation('agencys');
  const { startLoading, hideLoading } = useSpinner();
  const { mutation } = useChangeStatusAgency();
  const { enqueueSnackbar } = useSnackbar();
  const { onRefreshData } = useAPIData();

  const handleChangeStatus = useCallback(async () => {
    const { action } = await alertUtil.show({
      title: 'Confirm',
      variant: 'danger',
      description:
        status === AgencyStatus.ACTIVE
          ? 'Are you sure lock account?'
          : 'Are you sure unlock account?',
      yesNo: true,
    });

    if (action === AlertAction.CONFIRM) {
      startLoading();
      mutation(userId, {
        status: status === AgencyStatus.ACTIVE ? AgencyStatus.INACTIVE : AgencyStatus.ACTIVE,
      })
        .then(() => {
          enqueueSnackbar(t('messages.change_status_account_success'), {
            variant: 'success',
          });
          onRefreshData();
        })
        .catch(() => {
          enqueueSnackbar(t('messages.change_status_account_not_success'), {
            variant: 'error',
          });
        })
        .finally(() => hideLoading());
    }
  }, [enqueueSnackbar, hideLoading, mutation, onRefreshData, startLoading, status, t, userId]);

  return (
    <MenuItem onClick={handleChangeStatus}>
      {t(status ? 'lock_account' : 'unlock_account')}
    </MenuItem>
  );
};

export default ButtonChangeStatus;
