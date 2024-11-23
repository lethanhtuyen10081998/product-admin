import { Box, Grid, Paper } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import TextField from 'src/components/material/TextField';
import { PADDING } from 'src/constants/grid';
import { useAPIFilter } from 'src/context/filterContext/provider';
import { useDebounced } from 'src/hooks/useDebounce';

const FilterForm = () => {
  const { t } = useTranslation('common');
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
            <TextField label={t('search')} onChange={(e) => handleChange(e.target.value)} />
          </Grid>
        </Grid>
      </Box>

      {/* <Box display="flex" alignItems="center" width={300}>
        <Box ml="auto">
          <NextLink href={Routes.CREATE_SUB_AGENCY}>
            <Button label={t("common:create_agency")} />
          </NextLink>
        </Box>
      </Box> */}
    </Box>
  );
};

export default FilterForm;
