import useTranslation from 'next-translate/useTranslation';
import Button from 'src/components/material/Button';
import { useModal } from './useModal';

const ButtonRefundOrderItem = ({ orderItemId }: { orderItemId: string }) => {
  const { t } = useTranslation();
  const { Dialog, open } = useModal();

  return (
    <>
      <Button size='small' onClick={open}>
        {t('common:refund')}
      </Button>

      <Dialog orderItemId={orderItemId} />
    </>
  );
};

export default ButtonRefundOrderItem;
