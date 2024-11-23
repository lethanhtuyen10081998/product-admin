import { IconButton, Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';
import { DebtLimit } from 'src/types/debtLimit';
import useTranslation from 'next-translate/useTranslation';

const ButtonEdit = ({ data, onRefreshData }: { data: DebtLimit; onRefreshData(): void }) => {
  const { t } = useTranslation('debt-limit');
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title={t('edit_debt_limit')}>
        <IconButton onClick={open}>
          <Icon name='edit' />
        </IconButton>
      </Tooltip>

      <Dialog data={data} onRefreshData={onRefreshData} />
    </>
  );
};

export default ButtonEdit;
