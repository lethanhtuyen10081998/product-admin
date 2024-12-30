import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { SPACING } from 'src/constants/grid';
import { DataContextProvider } from 'src/context/dataContext/provider';
import { ProductTable } from 'src/modules/selling';
import { SelectedProductBill } from 'src/modules/selling/components/SelectedProductBill';

const SellingPage = () => {
  return (
    <Box>
      <Grid container spacing={SPACING.md}>
        <Grid item md={6}>
          <ProductTable />
        </Grid>

        <Grid item md={6}>
          <DataContextProvider>
            <SelectedProductBill />
          </DataContextProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellingPage;