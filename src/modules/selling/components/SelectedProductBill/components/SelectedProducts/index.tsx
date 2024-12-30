import { Box } from '@mui/material';
import { useEffect } from 'react';
import Table from 'src/components/material/Table';
import { useData } from 'src/context/dataContext/hooksContext';
import { useAPIDataContext } from 'src/context/dataContext/provider';
import { useSelectedProduct } from 'src/modules/selling/selectedProductContext/hooksContext';
import useColumns from './columns';
import { useAPISelectedProductContext } from 'src/modules/selling/selectedProductContext/provider';

const SelectedProductsContent = () => {
  const { columns } = useColumns();
  const { rows: data } = useData();
  const { onUpdateQuantity } = useAPISelectedProductContext();

  return (
    <Box sx={{ maxHeight: 500 }}>
      <Table
        editMode='cell'
        rows={data}
        columns={columns}
        height={500}
        density='compact'
        disableColumnMenu
        hideFooter
        onCellEditCommit={(params) => {
          onUpdateQuantity({ id: params.id.toString(), amount: params.value });
        }}
      />
    </Box>
  );
};

const SelectedProducts = () => {
  const data = useSelectedProduct();
  const { onUpdateData, onSetFunctionRefreshData } = useAPIDataContext();

  useEffect(() => {
    if (data) {
      onUpdateData({ rows: data, total: data.length });
    }
  }, [data, onUpdateData, onSetFunctionRefreshData]);

  return <SelectedProductsContent />;
};

export { SelectedProducts };
