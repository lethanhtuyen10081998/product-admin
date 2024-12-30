import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { SPACING } from 'src/constants/grid';
import { DataContextProvider } from 'src/context/dataContext/provider';
import { useAPIFilterContext } from 'src/context/filterContext/provider';
import TableData from './components/TableData/TableData';

type Props = {
  parentId?: string;
};

const Table = (props: Props) => {
  return (
    <Box display='grid' gap={SPACING}>
      <TableData />
    </Box>
  );
};

const TableAgencyContainer = (props: Props) => {
  const total = 0;
  const data: any[] = [{ id: 1, order: 'create' }];
  const refetch = () => {};
  const isFetching = false;
  const { onUpdateLoading } = useAPIFilterContext();

  useEffect(() => {
    onUpdateLoading(isFetching);
  }, [isFetching, onUpdateLoading]);

  return <Table {...props} />;
};

export default TableAgencyContainer;
