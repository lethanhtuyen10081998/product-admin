import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import getListLog from 'src/services/log/getListLog';
import { Log } from 'src/types/log';
import FilterForm from './FilterForm';
import useTranslation from 'next-translate/useTranslation';
import { SPACING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';

const useColumns = () => {
  const { t } = useTranslation('logs');
  const columns: GridColumns<Log> = [
    {
      field: 'module',
      headerName: t('module'),
      renderCell: ({ row }) => {
        return <Typography>{row.module}</Typography>;
      },
      minWidth: 200,
    },
    {
      field: 'content',
      headerName: t('content'),
      minWidth: 400,
      renderCell: ({ row }) => {
        return <Typography whiteSpace='wrap'>{row.content}</Typography>;
      },
    },
    {
      field: 'error',
      headerName: t('error'),
      minWidth: 200,
      renderCell: ({ row }) => {
        return <Typography>{row.error}</Typography>;
      },
    },
    {
      field: 'step',
      headerName: t('step'),
      renderCell: ({ row }) => {
        return <Typography>{row.step}</Typography>;
      },
      width: 300,
    },
    {
      field: 'process_id',
      headerName: t('process_id'),
      renderCell: ({ row }) => {
        return <Typography>{row.process_id}</Typography>;
      },
      width: 400,
    },
  ];

  return { columns };
};

const TableLogs = () => {
  const limit = useLimit();
  const page = usePage();
  const keyword = useKeyword();
  const { columns } = useColumns();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();

  const { mutation, loading, data, count } = getListLog();

  useEffect(() => {
    mutation({ page, size: limit, name: keyword });
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

export default TableLogs;
