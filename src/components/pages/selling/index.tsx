import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { ProductTable } from 'src/modules/selling';

const SellingPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6}>
          <ProductTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellingPage;
