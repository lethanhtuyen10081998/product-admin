import { Box } from '@mui/material';
import { useEffect } from 'react';
import Table from 'src/components/material/Table';
import { useData } from 'src/context/dataContext/hooksContext';
import { useAPIDataContext } from 'src/context/dataContext/provider';
import { useLimit, useLoading, usePage } from 'src/context/filterContext/hooksContext';
import { useAPIFilterContext } from 'src/context/filterContext/provider';
import useListProduct from 'src/services/product/getListProduct';
import useColumns from './columns';
import { useSelectedProduct } from 'src/modules/selling/selectedProductContext/hooksContext';

const SelectedProductsContent = () => {
  const limit = useLimit();
  const page = usePage();
  const loading = useLoading();
  const { onUpdateLimit, onUpdatePage } = useAPIFilterContext();
  const { columns } = useColumns();
  const { rows: data, total } = useData();

  return (
    <Box>
      <Table
        columns={columns}
        rows={data}
        loading={loading}
        onPageChange={(page) => onUpdatePage(page)}
        rowCount={total}
        pageSize={100}
        page={page - 1}
        onPageSizeChange={(pageSize) => {
          onUpdateLimit(pageSize);
        }}
      />
    </Box>
  );
};

const SelectedProducts = () => {
  const data = useSelectedProduct();
  const { onUpdateData, onSetFunctionRefreshData } = useAPIDataContext();
  const { onUpdateLoading } = useAPIFilterContext();

  useEffect(() => {
    if (data) {
      onUpdateData({ rows: data, total: data.length });
      onUpdateLoading(false);
    }
  }, [data, onUpdateLoading, onUpdateData, onSetFunctionRefreshData]);

  return <SelectedProductsContent />;
};

export { SelectedProducts };
