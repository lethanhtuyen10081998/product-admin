import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { SPACING } from 'src/constants/grid';
import { DataContextProvider } from 'src/context/dataContext/provider';
import { useAPIFilter } from 'src/context/filterContext/provider';
import TableData from './TableData';
import CheckinPermission from 'src/components/CheckinPermission';
import { ModulesName } from 'src/types/user';

type Props = {
  parentId?: string;
};

const TableAgency = (props: Props) => {
  return (
    <Box display='grid' gap={SPACING}>
      <CheckinPermission module={ModulesName.SELL} actions={['read']}>
        <Button>Create Order </Button>
      </CheckinPermission>
      <TableData />
    </Box>
  );
};

const TableAgencyContainer = (props: Props) => {
  const total = 0;
  const data: any[] = [];
  const refetch = () => {};
  const isFetching = false;
  const { onUpdateLoading } = useAPIFilter();

  useEffect(() => {
    onUpdateLoading(isFetching);
  }, [isFetching, onUpdateLoading]);

  return (
    <DataContextProvider onGetData={refetch} data={data} total={total}>
      <TableAgency {...props} />
    </DataContextProvider>
  );
};

export default TableAgencyContainer;
