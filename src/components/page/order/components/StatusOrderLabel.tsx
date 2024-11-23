import { Chip, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { OrderStatus, OrderStatusLabel } from 'src/types/order';

const StatusOrderLabel = ({ status }: { status: OrderStatus }) => {
  const { t } = useTranslation('order-detail');

  const getColor = () => {
    if (status === OrderStatus.PAYMENTED) {
      return 'success.main';
    }

    if (status === OrderStatus.REFUND_SUCCESS) {
      return 'success.main';
    }

    return 'error.light';
  };

  return (
    <Chip
      sx={{ color: getColor(), background: 'white', border: 'solid 1px' }}
      size='small'
      label={<Typography>{t(`common:${OrderStatusLabel[status]}`)}</Typography>}
    />
  );
};

export default StatusOrderLabel;
