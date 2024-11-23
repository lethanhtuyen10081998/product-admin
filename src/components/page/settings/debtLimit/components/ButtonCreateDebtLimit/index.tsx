import { Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';
import Button from 'src/components/material/Button';
import useTranslation from 'next-translate/useTranslation';

const ButtonCreateDebtLimit = ({ onRefreshData }: { onRefreshData(): void }) => {
  const { t } = useTranslation('debt-limit');
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title={t('create_debt_limit')}>
        <Button onClick={open} startIcon={<Icon name='plus' />}>
          {t('create_debt_limit')}
        </Button>
      </Tooltip>

      <Dialog onRefreshData={onRefreshData} />
    </>
  );
};

export default ButtonCreateDebtLimit;
