import { Box } from '@mui/material';
import { useEffect } from 'react';
import { SPACING } from 'src/constants/grid';
import { DataContextProvider } from 'src/context/dataContext/provider';
import { useKeyword, useLimit, usePage } from 'src/context/filterContext/hooksContext';
import { useAPIFilter } from 'src/context/filterContext/provider';
import useListAgency from 'src/services/agency/getListAgency';
import FilterForm from './components/FilterForm';
import TableData from './components/TableData';

type Props = {
  parentId?: string;
  hideCreateButton?: boolean;
};

const TableAgency = ({ hideCreateButton }: Props) => {
  return (
    <Box display='grid' gap={SPACING}>
      <FilterForm hideCreateButton={hideCreateButton} />

      <TableData />
    </Box>
  );
};

const TableAgencyContainer = (props: Props) => {
  const keyword = useKeyword();
  const limit = useLimit();
  const page = usePage();
  const { total, data, refetch, isFetching } = useListAgency({
    page,
    size: limit,
    keyword: keyword,
    parent_id: props?.parentId,
  });
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
