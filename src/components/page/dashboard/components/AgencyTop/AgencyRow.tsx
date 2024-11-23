/* eslint-disable max-len */
import { Avatar, Box, Typography } from '@mui/material';
import { formatMoney } from 'src/libs/utils';

export default function AgencyRow({
  amount,
  avatar,
  name,
}: {
  name: string;
  avatar: string;
  amount: number;
}) {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center' gap={4}>
        <Avatar src={avatar} />

        <Box>
          <Typography>{name}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography color='success.main'>{formatMoney(amount)}</Typography>
      </Box>
    </Box>
  );
}
