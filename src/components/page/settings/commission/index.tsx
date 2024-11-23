import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import useListCommission from 'src/services/settings/commissionLevel/getList';
import { CommissionLevel } from 'src/types/commission';
import ButtonEdit from './components/ButtonEdit';
import FilterForm from './components/FilterForm';
import { SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';

const CommissionsPage = () => {
  const { t } = useTranslation('commissions');
  const page = usePage();
  const limit = useLimit();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const keyword = useKeyword();
  const { mutation, loading, data, count } = useListCommission();
  const columns: GridColumns<CommissionLevel> = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: ({ row }) => {
        return <Typography>#{row.id.substring(0, 7)}</Typography>;
      },
      minWidth: 400,
    },
    {
      field: 'level',
      headerName: t('common:level'),
      minWidth: 100,
    },
    {
      field: 'commission',
      headerName: t('common:commission'),
      minWidth: 100,
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
      <FilterForm onRefreshData={() => mutation({ page, size: limit })} />
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

export default CommissionsPage;
