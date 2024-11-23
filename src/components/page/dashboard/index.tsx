import { Box, Grid } from '@mui/material';
import { SPACING } from 'src/constants/grid';
import AgencyTop from './components/AgencyTop';
import Order from './components/Order/Order';
import OrderTime from './components/OrderTime/OrderTime';
import Revenue from './components/Revenue/Revenue';
import Statistics from './components/Statistics';

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={SPACING}>
        <Grid item sm={12}>
          <Statistics />
        </Grid>

        <Grid item sm={8}>
          <Revenue />
        </Grid>
        <Grid item sm={4}>
          <OrderTime />
        </Grid>
        <Grid item sm={3}>
          <AgencyTop />
        </Grid>

        <Grid item sm={9}>
          <Order />
        </Grid>
      </Grid>
    </Box>
  );
}
