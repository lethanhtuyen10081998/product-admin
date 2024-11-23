import { Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';
import Button from 'src/components/material/Button';
import useTranslation from 'next-translate/useTranslation';

const ButtonCreate = ({ onRefreshData }: { onRefreshData(): void }) => {
  const { t } = useTranslation('commissions');
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title={t('create_commission')}>
        <Button onClick={open} startIcon={<Icon name='plus' />}>
          {t('create_commission')}
        </Button>
      </Tooltip>

      <Dialog onRefreshData={onRefreshData} />
    </>
  );
};

export default ButtonCreate;
