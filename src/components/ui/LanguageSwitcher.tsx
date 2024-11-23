import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import useTranslation from 'next-translate/useTranslation';
import { Icon } from '../icons';
import { LANGUAGE_EN, LANGUAGE_VN } from 'src/constants/constants';
import setLanguage from 'next-translate/setLanguage';
import { setLocale } from 'src/libs/languageUtils';

export default function LanguageSwitcher() {
  const { t, lang } = useTranslation('common');
  const handleChangeLanguage = React.useCallback((language: string) => {
    setLanguage(language);
    setLocale(language);
  }, []);

  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <Button variant='text' {...bindTrigger(popupState)} endIcon={<Icon name='language' />}>
            {t(lang)}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                handleChangeLanguage(LANGUAGE_VN);
                popupState.close();
              }}
            >
              Tiếng việt
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleChangeLanguage(LANGUAGE_EN);
                popupState.close();
              }}
            >
              English
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
