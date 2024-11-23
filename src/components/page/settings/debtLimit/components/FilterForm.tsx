import { Box, Grid, Paper } from '@mui/material';
import TextField from 'src/components/material/TextField';
import { PADDING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { useDebounced } from 'src/hooks/useDebounce';
import ButtonCreateDebtLimit from './ButtonCreateDebtLimit';

const FilterForm = ({ onRefreshData }: { onRefreshData(): void }) => {
  const { onChangeKeyword } = useAPIFilter();
  const { handleChange } = useDebounced({
    delay: 1500,
    initialValue: '',
    onCallback: (value) => {
      onChangeKeyword(value);
    },
  });

  return (
    <Box component={Paper} padding={PADDING} display='flex' width={1}>
      <Box width={1}>
        <Grid container>
          <Grid item sm={3}>
            <TextField label='Search' onChange={(e) => handleChange(e.target.value)} />
          </Grid>
        </Grid>
      </Box>

      <Box display='flex' alignItems='center' width={300}>
        <Box ml='auto'>
          <ButtonCreateDebtLimit onRefreshData={onRefreshData} />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterForm;
