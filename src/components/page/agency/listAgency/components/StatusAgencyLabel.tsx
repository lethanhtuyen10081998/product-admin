import { Chip, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { AgencyStatus, AgencyStatusLabel } from 'src/types/agency';

const StatusAgencyLabel = ({ status }: { status: AgencyStatus }) => {
  const { t } = useTranslation('agencys');

  const getColor = () => {
    if (status === AgencyStatus.ACTIVE) {
      return 'success.main';
    }

    return 'error.light';
  };

  return (
    <Chip
      sx={{ color: getColor(), background: 'white', border: 'solid 1px' }}
      size='small'
      label={<Typography>{t(`${AgencyStatusLabel[status]}`)}</Typography>}
    />
  );
};

export default StatusAgencyLabel;
