import { TextFieldProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import AutoComplete from 'src/components/material/AutoComplete';
import DiscountIcon from '@mui/icons-material/Discount';
import useListAgencyDebtLimit from 'src/services/core/useListAgencyDebtLimit';
import { formatMoney } from 'src/libs/utils';

export type AutoCompleteProps = TextFieldProps & {
  name: string;
  label?: string;
  level?: number;
};

const AutoCompleteAgencyDebtLimit = (props: AutoCompleteProps) => {
  const { name, helperText, level, label } = props;
  const [open, setOpen] = useState(false);
  const { mutation, data, loading } = useListAgencyDebtLimit();

  useEffect(() => {
    if (open && data.length === 0) {
      mutation({ level });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length, level, open]);

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { invalid } }) => {
        return (
          <AutoComplete
            options={data}
            loading={loading}
            getItemLabel={(item) => `${item?.name} - ${formatMoney(item.amount)}`}
            getItemValue={(item) => item?.id}
            onOpen={() => setOpen(true)}
            open={open}
            onClose={() => setOpen(false)}
            onChange={(_e, value) => {
              onChange(value);
            }}
            value={value}
            label={label}
            helperText={invalid ? helperText : ''}
            error={invalid}
            InputProps={{
              startAdornment: (
                <DiscountIcon
                  sx={{
                    mx: 1,
                    color: (theme) => theme.palette.grey[500],
                  }}
                />
              ),
            }}
          />
        );
      }}
    />
  );
};

export default AutoCompleteAgencyDebtLimit;
