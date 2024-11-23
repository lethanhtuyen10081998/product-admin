import { IconButton, Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';

const ButtonRefund = ({ orderItemId, amount }: { orderItemId: string; amount: number }) => {
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title='Hoàn tiền'>
        <IconButton onClick={open}>
          <Icon name='payment' />
        </IconButton>
      </Tooltip>

      <Dialog orderItemId={orderItemId} amount={amount} />
    </>
  );
};

export default ButtonRefund;
