import { IconButton, Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';
import useTranslation from 'next-translate/useTranslation';
import { CommissionLevel } from 'src/types/commission';

const ButtonEdit = ({ data, onRefreshData }: { data: CommissionLevel; onRefreshData(): void }) => {
  const { t } = useTranslation('commissions');
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title={t('edit_commission')}>
        <IconButton onClick={open}>
          <Icon name='edit' />
        </IconButton>
      </Tooltip>

      <Dialog data={data} onRefreshData={onRefreshData} />
    </>
  );
};

export default ButtonEdit;
