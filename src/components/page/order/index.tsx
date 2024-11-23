import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Table from 'src/components/material/Table';
import { SPACING } from 'src/constants/grid';
import { Routes } from 'src/constants/route';
import { DataContextProvider } from 'src/context/dataContext/provider';
import {
  useFilterObjectContext,
  useKeyword,
  useLimit,
  usePage,
  useSort,
} from 'src/context/filterContext/hooksContext';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { getRowClassNameTableOrder } from 'src/libs/table';
import { formatString } from 'src/libs/utils';
import useListOrder, { OrderFilter } from 'src/services/order/getListOrder';
import FilterForm from './components/FilterForm';
import useColumns from './components/column';

const TableOrders = () => {
  const router = useRouter();
  const limit = useLimit();
  const page = usePage();
  const keyword = useKeyword();
  const sort = useSort();
  const { columns } = useColumns();
  const { onUpdateLimit, onUpdatePage, onUpdateSort } = useAPIFilter();
  const filter = useFilterObjectContext<OrderFilter>();

  const { data, total, refetch, isFetching } = useListOrder({
    page,
    size: limit,
    name: keyword,
    key_sort: sort?.field,
    type_sort: sort?.by?.toUpperCase(),
    user_name: filter?.user_name,
    email: filter?.email,
    order_id: filter?.order_id,
    date: filter?.date,
    from: filter?.from,
    to: filter?.to,
    isRefund: filter?.isRefund,
    status: filter?.status,
  });

  return (
    <DataContextProvider data={data} onGetData={refetch} total={total}>
      <Box display='grid' gap={SPACING}>
        <FilterForm />
        <Table
          columns={columns}
          rows={data}
          loading={isFetching}
          onPageChange={(page) => onUpdatePage(page)}
          rowCount={total}
          pageSize={limit}
          page={page - 1}
          rowsPerPageOptions={[5, 10, 20, 50]}
          onPageSizeChange={(pageSize) => {
            onUpdateLimit(pageSize);
          }}
          onSortModelChange={(model) => {
            onUpdateSort({ by: model[0]?.sort, field: model[0]?.field });
          }}
          pagination
          onRowDoubleClick={(row) => {
            router.push(formatString(Routes.ORDER_DETAIL, { id: row.id }));
          }}
          getRowClassName={(params) => getRowClassNameTableOrder(params.row.payment_status)}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </DataContextProvider>
  );
};

export default TableOrders;
