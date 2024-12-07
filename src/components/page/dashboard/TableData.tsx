import router from 'next/router';
import Table from 'src/components/material/Table';
import { Routes } from 'src/constants/route';
import { useData } from 'src/context/dataContext/hooksContext';
import { useLimit, useLoading, usePage } from 'src/context/filterContext/hooksContext';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { formatString } from 'src/libs/utils';
import useColumns from './columns';

const TableData = () => {
  const limit = useLimit();
  const page = usePage();
  const loading = useLoading();
  const { onUpdateLimit, onUpdatePage } = useAPIFilter();
  const { columns } = useColumns();
  const { rows: data, total } = useData();

  return (
    <Table
      columns={columns}
      rows={data}
      loading={loading}
      onPageChange={(page) => onUpdatePage(page)}
      rowCount={total}
      pageSize={limit}
      page={page - 1}
      rowsPerPageOptions={[5, 10, 20, 50]}
      onPageSizeChange={(pageSize) => {
        onUpdateLimit(pageSize);
      }}
      pagination
      onRowDoubleClick={(row) => {
        router.push(formatString(Routes.AGENCY_DETAIL, { id: row.id }));
      }}
    />
  );
};

export default TableData;
