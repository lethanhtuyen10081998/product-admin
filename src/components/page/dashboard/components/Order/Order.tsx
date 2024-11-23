import { Box, Paper, Typography } from '@mui/material';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import { PADDING } from 'src/constants/grid';
import dynamic from 'next/dynamic';
const ChartNoSSR = dynamic(() => import('./Chart'), {
  ssr: false,
});

export default function Order() {
  return (
    <Box component={Paper} padding={PADDING}>
      <Box display='grid' gap={3}>
        <Box display='flex' justifyContent='space-between'>
          <Box display='grid' gap={1}>
            <Typography variant='h5'>Order</Typography>
            <Box>
              <Typography variant='h4'>2.582</Typography>

              <Box display='flex' alignItems='center'>
                <Icon name='up' sx={{ width: 18, color: 'success.main' }} />

                <Box display='flex' alignItems='center' gap={0.5}>
                  <Typography color='success.main'>2.1%</Typography>
                  <Typography> vs last month</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Button variant='text'>View Report</Button>
          </Box>
        </Box>

        <ChartNoSSR />
      </Box>
    </Box>
  );
}
