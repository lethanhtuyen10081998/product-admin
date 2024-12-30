import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Table from 'src/components/material/Table';
import { SPACING } from 'src/constants/grid';
import { useData } from 'src/context/dataContext/hooksContext';
import { useAPIDataContext } from 'src/context/dataContext/provider';
import { useLimit, useLoading, usePage } from 'src/context/filterContext/hooksContext';
import { useAPIFilterContext } from 'src/context/filterContext/provider';
import useListProduct from 'src/services/product/getListProduct';
import { FilterProduct } from './components/FilterProduct';
import useColumns from './columns';
import { useAPISelectedProductContext } from '../../selectedProductContext/provider';
import { GridSelectionModel } from '@mui/x-data-grid';
import { useSelectedProduct } from '../../selectedProductContext/hooksContext';

const ProductTableContent = () => {
  const limit = useLimit();
  const page = usePage();
  const loading = useLoading();
  const { onUpdateLimit, onUpdatePage } = useAPIFilterContext();
  const { columns } = useColumns();
  const { rows: data, total } = useData();
  const { onSelectedProduct } = useAPISelectedProductContext();
  const selectedProducts = useSelectedProduct();

  return (
    <Box display='grid' gap={SPACING.sm}>
      <FilterProduct />
      <Table
        selectionModel={selectedProducts.map((product) => product.id)}
        sxBox={{ height: 'calc(100vh - 260px)' }}
        columns={columns}
        rows={data}
        loading={loading}
        onPageChange={(page) => onUpdatePage(page)}
        rowCount={total}
        density='compact'
        pageSize={limit}
        page={page - 1}
        checkboxSelection={false}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageSizeChange={(pageSize) => {
          onUpdateLimit(pageSize);
        }}
        pagination
        disableColumnMenu
        onRowDoubleClick={(row) => {
          onSelectedProduct({ ...row.row, quantity: 1 });
        }}
      />
    </Box>
  );
};

const ProductTable = () => {
  const { data, total, isFetching, ...others } = useListProduct({ page: 1, size: 20 });
  const { onUpdateData, onSetFunctionRefreshData } = useAPIDataContext();
  const { onUpdateLoading } = useAPIFilterContext();

  useEffect(() => {
    if (data) {
      onUpdateData({ rows: data, total });
      onSetFunctionRefreshData(others.refetch);
      onUpdateLoading(false);
    }

    onUpdateLoading(isFetching);
  }, [
    data,
    total,
    others.refetch,
    others,
    onUpdateLoading,
    isFetching,
    onUpdateData,
    onSetFunctionRefreshData,
  ]);

  return <ProductTableContent />;
};

export { ProductTable };
