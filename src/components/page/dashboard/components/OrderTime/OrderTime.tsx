import { Box, Paper, Typography } from '@mui/material';
import Button from 'src/components/material/Button';
import { PADDING } from 'src/constants/grid';
import dynamic from 'next/dynamic';
const ChartNoSSR = dynamic(() => import('./Chart'), {
  ssr: false,
});

export default function OrderTime() {
  return (
    <Box component={Paper} padding={PADDING} display='grid' height={1}>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          <Typography variant='h5'>Order Time</Typography>
          <Typography>From 1-6 Dec, 2024</Typography>
        </Box>

        <Box>
          <Button variant='text'>View Report</Button>
        </Box>
      </Box>

      <Box display='grid' justifyContent='center'>
        <ChartNoSSR />
      </Box>
    </Box>
  );
}
