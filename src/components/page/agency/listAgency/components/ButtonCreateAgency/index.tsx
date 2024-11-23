import { useModal } from './useModal';
import useTranslation from 'next-translate/useTranslation';
import Button from 'src/components/material/Button';

const ButtonCreateAgency = ({ agencyId }: { agencyId?: string }) => {
  const { t } = useTranslation('agencys');
  const { Dialog, open } = useModal();

  return (
    <>
      <Button label={t('create_agency')} onClick={open} />

      <Dialog agencyId={agencyId} />
    </>
  );
};

export default ButtonCreateAgency;
