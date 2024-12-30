import TextField from '@mui/material/TextField';
import { Product } from 'src/types/product';

const EditQuantityProduct = ({ row }: { row: Product }) => {
  return <TextField sx={{ marginBottom: 0 }} variant='outlined' size='small' />;
};

export default EditQuantityProduct;
