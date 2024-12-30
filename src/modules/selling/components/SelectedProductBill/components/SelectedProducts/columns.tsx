import { IconButton, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { Icon } from 'src/components/icons';
import { formatMoney } from 'src/libs/utils';
import { useAPISelectedProductContext } from 'src/modules/selling/selectedProductContext/provider';

const useColumns = () => {
  const { t } = useTranslation();
  const { onRemoveProduct } = useAPISelectedProductContext();

  const columns: GridColumns<any> = [
    {
      field: 'action',
      headerName: t(''),
      minWidth: 20,
      sortable: false,
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <IconButton size='small' onClick={() => onRemoveProduct({ id: row.id })}>
            <Icon sx={{ color: 'error.main' }} name='delete' />
          </IconButton>
        );
      },
    },
    {
      field: 'id',
      headerName: t('Mã SP'),
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return <Typography>{row.id}</Typography>;
      },
    },
    {
      field: 'idCode',
      align: 'center',
      headerName: t('Mã vạch'),
      headerAlign: 'center',
      minWidth: 100,
      renderCell: ({ row }) => {
        return <Typography>{row.idCode}</Typography>;
      },
    },
    {
      field: 'name',
      headerName: t('Tên sản phẩm'),
      minWidth: 230,
    },
    {
      field: 'quantity',
      headerName: t('Số lượng'),
      headerAlign: 'center',
      editable: true,
      align: 'center',
      type: 'number',
      minWidth: 100,
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value < 1;
        return { ...params.props, error: hasError };
      },
    },
    {
      align: 'center',
      field: 'unit',
      headerName: t('Đơn vị tính'),
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return <Typography color='primary'>{row.unit}</Typography>;
      },
    },
    {
      field: 'price',
      headerAlign: 'center',
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
