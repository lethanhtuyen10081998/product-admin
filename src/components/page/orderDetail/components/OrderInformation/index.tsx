import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import { useOrderDetailContext } from '../../context/hooksContext';
import { PADDING } from 'src/constants/grid';
import useTranslation from 'next-translate/useTranslation';
import { formatMoney } from 'src/libs/utils';
import { formatDate } from 'src/libs/date';

const OrderInformation = () => {
  const { t } = useTranslation('order-detail');
  const order = useOrderDetailContext();

  return (
    <Box display='flex'>
      <Box ml='auto' display='flex' component={Paper} padding={PADDING} height={100}>
        {/* <Typography>{t("order", { id: order.id })}</Typography> */}

        <Box>
          <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={5}>
            <Box>
              <Typography variant='h4' color='primary' textAlign='right'>
                {order.items?.length}
              </Typography>

              <Typography textAlign='right' fontWeight='bold' mt={0.5}>
                {t('total_items')}
              </Typography>
            </Box>

            <Box>
              <Typography variant='h4' color='primary' textAlign='right'>
                {formatDate(order.createAt, 'dd/MM/yyyy')}
              </Typography>

              <Typography textAlign='right' fontWeight='bold' mt={0.5}>
                {t('date_order')}
              </Typography>
            </Box>

            {Boolean(order?.commission) && (
              <Box>
                <Typography variant='h4' color='error' textAlign='right'>
                  {order.commission || 0}%
                </Typography>

                <Typography textAlign='right' color='error' fontWeight='bold' mt={0.5}>
                  {t('common:commission')}
                </Typography>
              </Box>
            )}

            {Boolean(order.discount) && (
              <Box>
                <Typography variant='h4' color='error'>
                  - {formatMoney(order.discount || 0)}
                </Typography>

                <Typography textAlign='right' color='error' fontWeight='bold' mt={0.5}>
                  {t('common:discount')}
                </Typography>
              </Box>
            )}

            <Box>
              <Typography variant='h4' color='primary'>
                {formatMoney(order.amount || 0)}
              </Typography>

              <Typography textAlign='right' fontWeight='bold' mt={0.5}>
                {t('common:total')}
              </Typography>
            </Box>

            <Box>
              <Typography variant='h4' color='primary'>
                {formatMoney(order.origin_amount || 0)}
              </Typography>

              <Typography textAlign='right' fontWeight='bold' mt={0.5}>
                {t('common:sub_total')}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderInformation;
