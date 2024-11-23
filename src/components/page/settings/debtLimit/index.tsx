import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import { formatMoney } from 'src/libs/utils';
import { DebtLimit } from 'src/types/debtLimit';
import ButtonEdit from './components/ButtonEdit';
import FilterForm from './components/FilterForm';
import useTranslation from 'next-translate/useTranslation';
import useListDebtLimit from 'src/services/settings/debtLimit/getListDebtLimit';
import { SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';

const DebtLimitPage = () => {
  const { t } = useTranslation('debt-limit');
  const page = usePage();
  const limit = useLimit();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const keyword = useKeyword();
  const { mutation, loading, data, count } = useListDebtLimit();
  const columns: GridColumns<DebtLimit> = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: ({ row }) => {
        return <Typography>#{row.id.substring(0, 7)}</Typography>;
      },
      minWidth: 400,
    },

    {
      field: 'name',
      headerName: t('name'),
      minWidth: 200,
    },
    {
      field: 'amount',
      headerName: t('limited_amount'),
      minWidth: 400,
      renderCell: ({ row }) => {
        return <Typography>{formatMoney(row.amount)}</Typography>;
      },
    },
    {
      field: 'action',
      sortable: false,
      headerName: t('common:action'),
      filterable: false,
      hideable: false,
      groupable: false,
      width: 300,

      renderCell: ({ row }) => {
        return (
          <Box>
            <ButtonEdit data={row} onRefreshData={() => mutation({ page, size: limit })} />
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    mutation({ page, size: limit, name: keyword });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, keyword]);

  return (
    <Box display='grid' gap={SPACING}>
      <FilterForm onRefreshData={() => mutation({ page: page, size: limit })} />
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

export default DebtLimitPage;
