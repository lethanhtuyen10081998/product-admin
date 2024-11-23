import { MenuItem } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useModal } from './useModal';
import { Agency } from 'src/types/agency';

const ButtonPaymentDebtLimit = ({ agency }: { agency: Agency }) => {
  const { t } = useTranslation('agencys');
  const { Dialog, open } = useModal();

  return (
    <>
      <MenuItem
        onClick={() => {
          open();
        }}
      >
        {t('set_up_debit')}
      </MenuItem>

      <Dialog agency={agency} />
    </>
  );
};

export default ButtonPaymentDebtLimit;
