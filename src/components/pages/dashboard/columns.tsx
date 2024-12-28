import { Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { formatMoney } from 'src/libs/utils';

const useColumns = () => {
  const { t } = useTranslation();

  const columns: GridColumns<any> = [
    {
      field: 'action',
      sortable: false,
      headerName: t('common:action'),
      filterable: false,
      hideable: false,
      groupable: false,
      headerAlign: 'right',
      align: 'right',
      width: 70,
      disableColumnMenu: true,
    },
    {
      field: 'user.fullname',
      headerName: t('common:fullname'),
      renderCell: ({ row }) => {
        return (
          <Typography>{[row.user.info?.first_name, row.user.info?.last_name].join(' ')}</Typography>
        );
      },
      minWidth: 300,
    },

    {
      field: 'user.phone',
      headerName: t('common:phone_number'),
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Typography>{row.user.phone}</Typography>;
      },
    },
    {
      field: 'user.email',
      headerName: t('common:email'),
      renderCell: ({ row }) => {
        return <Typography>{row.user.email}</Typography>;
      },
      minWidth: 300,
    },
    {
      field: 'level',
      headerName: t('common:level'),
      renderCell: ({ row }) => {
        return <Typography>{t('common:level_agency', { level: row.level })}</Typography>;
      },
      width: 150,
    },
    {
      field: 'statistic.revenue',
      headerName: t('common:revenue'),
      renderCell: ({ row }) => {
        return <Typography color='success.main'>{formatMoney(row.statistic.revenue)}</Typography>;
      },
      width: 120,
    },
    {
      field: 'statistic.discount',
      headerName: t('common:discount'),
      renderCell: ({ row }) => {
        return <Typography color='error'>{formatMoney(row.statistic.discount)}</Typography>;
      },
      width: 120,
    },
    {
      field: 'debtLimit',
      headerName: t('common:debt_limit'),
      renderCell: ({ row }) => {
        if (row?.debtLimit?.amount) {
          return (
            <Typography color='success.main'>{formatMoney(row?.debtLimit?.amount)}</Typography>
          );
        }

        return <Typography color='success.main'>0</Typography>;
      },
      width: 120,
    },
  ];

  return { columns };
};

export default useColumns;
