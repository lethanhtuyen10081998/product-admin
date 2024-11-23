import { MenuItem } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useModal } from './useModal';

const ButtonPayment = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();
  const { Dialog, open } = useModal();

  return (
    <>
      <MenuItem onClick={open}>{t('common:recharge')}</MenuItem>

      <Dialog userId={userId} />
    </>
  );
};

export default ButtonPayment;
