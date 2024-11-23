import { Box, Divider, Paper, Typography } from '@mui/material';
import Button from 'src/components/material/Button';
import { PADDING } from 'src/constants/grid';
import AgencyRow from './AgencyRow';

export default function AgencyTop() {
  const data = [
    {
      name: 'Le Thanh Tuyen',
      amount: 95000000,
      avatar:
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Nguyen Hoang Bao Tran',
      amount: 123000000,
      avatar:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tran Hoai Thuong',
      amount: 13000000,
      avatar:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Truong Minh Thieu',
      amount: 173000000,
      avatar:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Hoang Minh Giam',
      amount: 190000000,
      avatar:
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tran Minh Nhan',
      amount: 120500000,
      avatar:
        'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <Box component={Paper} padding={PADDING} height={1}>
      <Box display='flex' justifyContent='space-between'>
        <Box display='grid' gap={1}>
          <Typography variant='h5'>Agency Top Revenue</Typography>
        </Box>

        <Box>
          <Button variant='text'>View Report</Button>
        </Box>
      </Box>

      <Box mt={2} display='grid' gap={1}>
        {data.map((item) => {
          return (
            <>
              <AgencyRow {...item} key={item.name} />
              <Divider />
            </>
          );
        })}
      </Box>
    </Box>
  );
}
