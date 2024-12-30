import { FormControlLabel, Checkbox } from '@mui/material';
import Box from '@mui/material/Box';

const PermissionsCheckbox = ({
  module,
  permissions,
}: {
  module: string;
  permissions: string[];
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {permissions.map((permission) => (
        <Box key={`${module}-${permission}`}>
          <FormControlLabel
            control={<Checkbox size='small' sx={{ p: 0.5 }} />}
            label={permission}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PermissionsCheckbox;
