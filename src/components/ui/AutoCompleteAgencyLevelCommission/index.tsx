import { TextFieldProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import AutoComplete from 'src/components/material/AutoComplete';
import useListAgencyLevelCommission from 'src/services/core/getListAgencyLevelCommission';
import DiscountIcon from '@mui/icons-material/Discount';
import FormHelperText from 'src/components/material/FormHelperText';
import useTranslation from 'next-translate/useTranslation';

export type AutoCompleteProps = TextFieldProps & {
  name: string;
  label?: string;
  level?: number;
};

const AutoCompleteAgencyLevelCommission = (props: AutoCompleteProps) => {
  const { t } = useTranslation();
  const { name, helperText, level, label } = props;
  const [open, setOpen] = useState(false);
  const { mutation, data, loading } = useListAgencyLevelCommission();

  useEffect(() => {
    if (open && data.length === 0) {
      mutation({ level });
    }
  }, [data.length, level, mutation, open]);

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { invalid } }) => {
        return (
          <>
            <AutoComplete
              options={data.map((item) => item.commission)}
              freeSolo={true}
              loading={loading}
              getItemLabel={(item) => `${item}%`}
              getItemValue={(item) => item}
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

            <FormHelperText>
              {t('common:message.message_helper_text_enter_commission')}
            </FormHelperText>
          </>
        );
      }}
    />
  );
};

export default AutoCompleteAgencyLevelCommission;
