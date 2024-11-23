import { Box, Paper, Typography } from '@mui/material';
import { Icon } from 'src/components/icons';
import Button from 'src/components/material/Button';
import { PADDING, SPACING } from 'src/constants/grid';
import dynamic from 'next/dynamic';
const ChartNoSSR = dynamic(() => import('./Chart'), {
  ssr: false,
});

export default function Revenue() {
  return (
    <Box component={Paper} padding={PADDING} gap={SPACING} display='grid'>
      <Box display='flex' justifyContent='space-between'>
        <Box display='grid' gap={1}>
          <Typography variant='h5'>Revenue</Typography>
          <Box>
            <Typography variant='h4'>IDR 7.852.000</Typography>

            <Box display='flex' alignItems='center'>
              <Icon name='up' sx={{ width: 18, color: 'success.main' }} />

              <Box display='flex' alignItems='center' gap={0.5}>
                <Typography color='success.main'>2.1%</Typography>
                <Typography> vs last week</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Button variant='text'>View Report</Button>
        </Box>
      </Box>

      <Box>
        <ChartNoSSR />
      </Box>
    </Box>
  );
}
