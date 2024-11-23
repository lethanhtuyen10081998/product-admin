import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';

const StyledSelect = styled(Select)(({ theme }) => ({
  '.MuiInputBase-input': {
    color: theme.palette.primary.main,
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },

  '.MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));

export default StyledSelect;
