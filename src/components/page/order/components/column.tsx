import { Box, IconButton, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { Icon } from 'src/components/icons';
import NextLink from 'src/components/material/NextLink';
import { Routes } from 'src/constants/route';
import { formatDate } from 'src/libs/date';
import { formatMoney, formatString } from 'src/libs/utils';
import { Order } from 'src/types/order';
import StatusOrderLabel from './StatusOrderLabel';

const useColumns = () => {
  const { t } = useTranslation('common');
  const columns: GridColumns<Order> = [
    {
      field: 'order_id',
      headerName: 'ID',
      renderCell: ({ row }) => {
        return (
          <NextLink
            href={formatString(Routes.AGENCY_DETAIL, { id: row.agency_id })}
            sx={{ color: 'primary.main' }}
          >
            <Typography>{row.id?.substring(0, 7)}</Typography>
          </NextLink>
        );
      },
      minWidth: 150,
    },

    {
      field: 'payment_status',
      headerName: t('common:status'),
      renderCell: ({ row }) => {
        return <StatusOrderLabel status={row.payment_status} />;
      },
      width: 150,
    },

    {
      field: 'user.fullname',
      headerName: t('common:fullname'),
      renderCell: ({ row }) => {
        return (
          <NextLink
            href={formatString(Routes.AGENCY_DETAIL, { id: row.agency_id })}
            sx={{ color: 'primary.main' }}
          >
            <Typography>{row.user?.fullname}</Typography>
          </NextLink>
        );
      },
      minWidth: 200,
    },
    {
      field: 'email_order',
      headerName: t('common:email'),
      renderCell: ({ row }) => {
        return <Typography>{row.email_order}</Typography>;
      },
      minWidth: 300,
    },
    {
      field: 'amount',
      headerName: t('common:total'),
      renderCell: ({ row }) => {
        return <Typography color='green'>{formatMoney(row.amount ?? 0)}</Typography>;
      },
      width: 150,
    },
    {
      field: 'commission',
      headerName: t('common:commission'),
      renderCell: ({ row }) => {
        return <Typography color='error'>{row.commission}%</Typography>;
      },
    },
    {
      field: 'discount',
      headerName: t('common:discount'),
      renderCell: ({ row }) => {
        return <Typography color='error'>{formatMoney(row?.discount || 0)}</Typography>;
      },
      width: 150,
    },
    {
      field: 'createAt',
      headerName: t('common:date'),
      renderCell: ({ row }) => {
        return <Typography>{formatDate(`${row.createAt || ''}`)}</Typography>;
      },
      width: 300,
    },

    {
      field: 'action',
      sortable: false,
      headerName: t('common:action'),
      filterable: false,
      hideable: false,
      groupable: false,
      align: 'right',
      headerAlign: 'right',

      renderCell: ({ row }) => {
        return (
          <Box display='flex' gap={2}>
            <NextLink href={formatString(Routes.ORDER_DETAIL, { id: row.id })}>
              <IconButton>
                <Icon name='view' />
              </IconButton>
            </NextLink>
          </Box>
        );
      },
    },
  ];

  return { columns };
};

export default useColumns;
