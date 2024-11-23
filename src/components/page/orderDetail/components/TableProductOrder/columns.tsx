import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import startCase from 'lodash/startCase';
import useTranslation from 'next-translate/useTranslation';
import StatusOrderLabel from 'src/components/page/order/components/StatusOrderLabel';
import { formatDate } from 'src/libs/date';
import { formatMoney } from 'src/libs/utils';
import { OrderItem, OrderStatus } from 'src/types/order';
import ButtonRefundOrderItem from './components/ButtonRefundOrderItem';

const useColumns = () => {
  const { t } = useTranslation('order-detail');

  const columns: GridColumns<OrderItem> = [
    {
      field: 'item_id',
      headerName: t('item_id'),
      renderCell: ({ row }) => {
        return <Typography color='primary'>#{row.id?.substring(0, 7)}</Typography>;
      },
    },

    {
      field: 'status',
      headerName: t('common:status'),
      renderCell: ({ row }) => {
        return <StatusOrderLabel status={row.status} />;
      },
      width: 150,
    },

    {
      field: 'sim_id',
      headerName: t('sim_id'),
      renderCell: ({ row }) => {
        return <Typography color='primary'>{row.sim_id}</Typography>;
      },
      minWidth: 150,
    },

    {
      field: 'product_name',
      headerName: t('product_name'),
      renderCell: ({ row }) => {
        return <Typography>{row.package?.data}</Typography>;
      },
      minWidth: 300,
    },

    {
      field: 'price',
      headerName: t('common:price'),
      renderCell: ({ row }) => {
        return <Typography color='green'>{formatMoney(row.package?.haravan?.price)}</Typography>;
      },
      minWidth: 150,
    },

    {
      field: 'type',
      headerName: t('common:sim_type'),
      renderCell: ({ row }) => {
        return <Typography>{startCase(row.package?.for_type)}</Typography>;
      },
      minWidth: 50,
    },

    {
      field: 'active_date',
      headerName: t('common:active_date'),
      renderCell: ({ row }) => {
        return (
          <Typography>{row?.active_date && formatDate(row?.active_date, 'dd/MM/yyyy')}</Typography>
        );
      },
      minWidth: 50,
    },

    {
      field: 'action',
      sortable: false,
      headerName: t('common:action'),
      filterable: false,
      hideable: false,
      groupable: false,
      headerAlign: 'right',
      align: 'right',
      width: 200,

      renderCell: ({ row }) => {
        return (
          <Box>
            {row.status === OrderStatus.NOT_PAYMENTED && (
              <ButtonRefundOrderItem orderItemId={row.id} />
            )}
          </Box>
        );
      },
    },
  ];

  return { columns };
};

export default useColumns;
