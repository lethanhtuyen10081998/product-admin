import { Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { formatMoney } from 'src/libs/utils';

const useColumns = () => {
  const { t } = useTranslation();

  const columns: GridColumns<any> = [
    {
      field: 'user.phone',
      headerName: t('Mã sản phẩm'),
      minWidth: 100,
      align: 'center',
      renderCell: ({ row }) => {
        return <Typography>{row.id}</Typography>;
      },
    },
    {
      field: 'name',
      headerName: t('Tên sản phẩm'),
      minWidth: 450,
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
      headerName: t('Giá bán'),
      renderCell: ({ row }) => {
        return <Typography color='green'>{formatMoney(row.price)}</Typography>;
      },
      width: 150,
    },
  ];

  return { columns };
};

export default useColumns;
