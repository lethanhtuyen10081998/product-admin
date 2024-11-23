import { Box, Tooltip, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import { formatDate } from 'src/libs/date';
import { formatMoney } from 'src/libs/utils';
import useListOrderItems from 'src/services/order/getListOrderItem';
import { OrderItem } from 'src/types/order';
import ButtonRefund from './ButtonRefund';
import FilterForm from './FilterForm';
import { SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';

const getSattus = (status: number) => {
  switch (status) {
    case 0:
      return 'Đơn lỗi không lấy được sim';
    case -2:
      return 'Người dùng huỷ';
    case -1:
      return 'Đơn đã hoàn';
    default:
      return '';
  }
};

const useColumns = () => {
  const columns: GridColumns<OrderItem> = [
    {
      field: 'user.fullname',
      headerName: 'Họ và tên',
      renderCell: ({ row }) => {
        return <Typography>{row.order?.user?.fullname}</Typography>;
      },
      minWidth: 400,
    },
    {
      field: 'email',
      headerName: 'Email',
      renderCell: ({ row }) => {
        return <Typography>{row.email_order}</Typography>;
      },
      minWidth: 400,
    },
    {
      field: 'amount',
      headerName: 'Số tiền',
      renderCell: ({ row }) => {
        return <Typography>{formatMoney(row.price ?? 0)}</Typography>;
      },
      width: 300,
    },
    {
      field: 'create_at',
      headerName: 'Ngày mua',
      renderCell: ({ row }) => {
        return <Typography>{row.createAt ? formatDate(`${row.createAt}`) : ''}</Typography>;
      },
      width: 300,
    },
    {
      field: 'status',
      headerName: 'trạng thái huỷ',
      renderCell: ({ row }) => {
        return <Typography>{`${getSattus(row.status ?? 0)}`}</Typography>;
      },
      width: 300,
    },
    {
      field: 'action',
      sortable: false,
      headerName: 'Action',
      filterable: false,
      hideable: false,
      groupable: false,
      width: 300,

      renderCell: ({ row }) => {
        return (
          <Box>
            <Tooltip title='Hoàn tiền'>
              <ButtonRefund orderItemId={`${row.id}`} amount={Number(row.price || '0')} />
            </Tooltip>
          </Box>
        );
      },
    },
  ];
  return { columns };
};
const TableOrderItems = () => {
  const limit = useLimit();
  const page = usePage();
  const keyword = useKeyword();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const { columns } = useColumns();

  const { mutation, loading, data, count } = useListOrderItems();

  useEffect(() => {
    mutation({ page, size: limit, name: keyword, isRefund: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, keyword]);

  return (
    <Box display='grid' gap={SPACING}>
      <FilterForm />
      <Table
        columns={columns}
        rows={data}
        loading={loading}
        onPageChange={(page) => onUpdatePage(page)}
        rowCount={count}
        pageSize={limit}
        page={page - 1}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(pageSize) => {
          onUpdateLimit(pageSize);
        }}
        pagination
      />
    </Box>
  );
};

export default TableOrderItems;
