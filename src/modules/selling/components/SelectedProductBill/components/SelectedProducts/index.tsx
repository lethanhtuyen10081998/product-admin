import { Box } from '@mui/material';
import { useEffect } from 'react';
import Table from 'src/components/material/Table';
import { useData } from 'src/context/dataContext/hooksContext';
import { useAPIDataContext } from 'src/context/dataContext/provider';
import { useSelectedProduct } from 'src/modules/selling/selectedProductContext/hooksContext';
import useColumns from './columns';

const SelectedProductsContent = () => {
  const { columns } = useColumns();
  const { rows: data } = useData();

  return (
    <Box sx={{ maxHeight: 500 }}>
      <Table editMode='row' rows={data} columns={columns} hideFooter height={500} />
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