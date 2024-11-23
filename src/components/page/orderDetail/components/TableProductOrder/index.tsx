import { Box } from '@mui/material';
import { useOrderDetailContext } from '../../context/hooksContext';
import Table from 'src/components/material/Table';
import useColumns from './columns';
import { getRowClassNameTableOrder } from 'src/libs/table';

const TableProductOrder = () => {
  const order = useOrderDetailContext();
  const { columns } = useColumns();

  return (
    <Box display='flex'>
      <Table
        title='Order Items'
        columns={columns}
        rows={order.items || []}
        getRowClassName={(params) => getRowClassNameTableOrder(params.row.status)}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default TableProductOrder;
