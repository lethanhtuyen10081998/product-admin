import { IconButton, Tooltip } from '@mui/material';
import { Icon } from 'src/components/icons';
import { useModal } from './useModal';

const ButtonPayment = ({ userId }: { userId: string }) => {
  const { Dialog, open } = useModal();

  return (
    <>
      <Tooltip title='Nạp tiền'>
        <IconButton onClick={open}>
          <Icon name='payment' />
        </IconButton>
      </Tooltip>

      <Dialog userId={userId} />
    </>
  );
};

export default ButtonPayment;
