import { Box } from '@mui/material';
import { Bill } from './components/Bill';
import { SelectedProducts } from './components/SelectedProducts';
import { SPACING } from 'src/constants/grid';

const SelectedProductBill = () => {
  return (
    <Box display='grid' gap={SPACING.md}>
      <Bill />
      <SelectedProducts />
    </Box>
  );
};

export { SelectedProductBill };

export default SelectedProductBill;
