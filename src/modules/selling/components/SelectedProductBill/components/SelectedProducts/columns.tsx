import { Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { formatMoney } from 'src/libs/utils';

const useColumns = () => {
  const { t } = useTranslation();

  const columns: GridColumns<any> = [
    {
      field: 'id',
      headerName: t('Mã SP'),
      minWidth: 100,
      align: 'center',
      renderCell: ({ row }) => {
        return <Typography>{row.id}</Typography>;
      },
    },
    {
      field: 'idCode',
      align: 'center',
      headerName: t('Mã vạch'),
      minWidth: 100,
      renderCell: ({ row }) => {
        return <Typography>{row.idCode}</Typography>;
      },
    },
    {
      field: 'name',
      headerName: t('Tên sản phẩm'),
      minWidth: 250,
    },
    {
      field: 'amount',
      headerName: t('Số lượng'),
      editable: true,
      type: 'number',
    },
    {
      field: 'unit',
      headerName: t('Đơn vị tính'),
      renderCell: ({ row }) => {
        return <Typography color='primary'>{row.unit}</Typography>;
      },
    },
    {
      field: 'price',
      headerName: t('Đơn giá'),
      renderCell: ({ row }) => {
        return <Typography color='green'>{formatMoney(row.price)}</Typography>;
      },
      width: 100,
    },
    {
      field: 'total',
      headerName: t('Thành tiền'),
      renderCell: ({ row }) => {
        return <Typography color='green'>{formatMoney(row.price)}</Typography>;
      },
      width: 100,
    },
  ];

  return { columns };
};

export default useColumns;
