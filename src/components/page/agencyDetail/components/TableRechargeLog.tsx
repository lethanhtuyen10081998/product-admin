import { Box, Typography } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import Table from 'src/components/material/Table';
import { SPACING } from 'src/constants/grid';
import { useLimit, usePage } from 'src/context/filterContext/hooksContext';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { formatDate } from 'src/libs/date';
import { formatMoney } from 'src/libs/utils';
import useListRechargeLog from 'src/services/agency/getListRechargeLog';
import { AgencyRechargeLog } from 'src/types/agency';

const TableRechargeLog = ({ userId }: { userId: string }) => {
  const { t } = useTranslation('agencys-detail');
  const limit = useLimit();
  const page = usePage();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const { mutation, loading, data, count } = useListRechargeLog();

  const columns: GridColumns<AgencyRechargeLog> = [
    {
      field: 'created_at',
      headerName: t('common:date'),
      minWidth: 220,
      renderCell: ({ row }) => {
        return <Typography>{formatDate(row.created_at)}</Typography>;
      },
    },
    {
      field: 'amount',
      headerName: t('common:deposit_amount'),
      minWidth: 200,
      renderCell: ({ row }) => {
        return <Typography color='success.main'>{formatMoney(row.amount)}</Typography>;
      },
    },
    {
      field: 'note',
      headerName: t('common:note'),
    },
  ];

  useEffect(() => {
    mutation({ page, size: limit, user_id: userId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, userId]);

  return (
    <Box display='grid' gap={SPACING}>
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

export default TableRechargeLog;
