import { Box, Grid, Paper } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import TextField from 'src/components/material/TextField';
import { PADDING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { useDebounced } from 'src/hooks/useDebounce';
import ButtonCreateAgency from './ButtonCreateAgency';
import React from 'react';

const FilterForm = React.memo(
  ({ agencyId, hideCreateButton }: { agencyId?: string; hideCreateButton?: boolean }) => {
    const { t } = useTranslation('agencys');
    const { onChangeKeyword } = useAPIFilter();
    const { handleChange } = useDebounced({
      delay: 1500,
      initialValue: '',
      onCallback: (value) => {
        onChangeKeyword(value);
      },
    });

    return (
      <Box component={Paper} padding={PADDING} display='flex' width={1}>
        <Box width={1}>
          <Grid container>
            <Grid item sm={3}>
              <TextField
                label={t('common:search')}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {!hideCreateButton && (
          <Box display='flex' alignItems='center' width={300}>
            <Box ml='auto'>
              <ButtonCreateAgency agencyId={agencyId} />
            </Box>
          </Box>
        )}
      </Box>
    );
  },
);

export default FilterForm;
