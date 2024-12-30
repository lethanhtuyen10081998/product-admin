import { Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { formatMoney } from 'src/libs/utils';
import { Product } from 'src/types/product';

const useColumns = () => {
  const { t } = useTranslation();

  const columns: GridColumns<Product> = [
    {
      field: 'user.phone',
      headerName: t('Mã SP'),
      minWidth: 100,
      align: 'center',
      renderCell: ({ row }) => {
        return <Typography>{row.id}</Typography>;
      },
      hideSortIcons: true,
    },
    {
      field: 'name',
      headerName: t('Tên sản phẩm'),
      minWidth: 450,
    },
    {
      field: 'quantity',
      headerName: t('Số lượng'),
      minWidth: 50,
      renderCell: ({ row }) => {
        return <Typography>{row.quantity}</Typography>;
      },
      align: 'center',
    },
    {
      field: 'unit',
      align: 'center',
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
      width: 100,
    },
  ];

  return { columns };
};

export default useColumns;
