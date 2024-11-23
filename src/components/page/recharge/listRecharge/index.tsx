import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import { formatDate } from 'src/libs/date';
import { formatMoney } from 'src/libs/utils';
import useListRecharge from 'src/services/recharge/getListRecharge';
import { Recharge } from 'src/types/recharge';
import useTranslation from 'next-translate/useTranslation';
import FilterForm from './components/FilterForm';
import { SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';

const useColums = () => {
  const { t } = useTranslation('recharges');
  const columns: GridColumns<Recharge> = [
    {
      field: 'user.fullname',
      headerName: t('common:fullname'),
      renderCell: ({ row }) => {
        return <Typography>{row.user?.fullname}</Typography>;
      },
      minWidth: 200,
    },

    {
      field: 'user.phone',
      headerName: t('common:phone_number'),
      minWidth: 200,
      renderCell: ({ row }) => {
        return <Typography>{row.user?.phone}</Typography>;
      },
    },
    {
      field: 'user.email',
      headerName: t('common:email'),
      renderCell: ({ row }) => {
        return <Typography>{row.user?.email}</Typography>;
      },
      minWidth: 300,
    },
    {
      field: 'amount',
      headerName: t('common:deposit_amount'),
      renderCell: ({ row }) => {
        return <Typography color='success.main'>{formatMoney(row.amount ?? 0)}</Typography>;
      },
      width: 200,
    },
    {
      field: 'create_at',
      headerName: t('common:date'),
      renderCell: ({ row }) => {
        return (
          <Typography>{row.created_at ? formatDate(`${row.created_at || ''}`) : ''}</Typography>
        );
      },
      width: 300,
    },
    {
      field: 'note',
      headerName: t('common:note'),
      renderCell: ({ row }) => {
        return <Typography>{row.note}</Typography>;
      },
      width: 300,
    },
  ];

  return { columns };
};

const TableRecharges = () => {
  const keyword = useKeyword();
  const page = usePage();
  const limit = useLimit();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const { columns } = useColums();

  const { data, count, isFetching } = useListRecharge({ page, size: limit, name: keyword });

  return (
    <Box display='grid' gap={SPACING}>
      <FilterForm />

      <Table
        columns={columns}
        rows={data}
        loading={isFetching}
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

export default TableRecharges;
