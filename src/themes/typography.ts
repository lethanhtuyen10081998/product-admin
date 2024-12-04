/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { IThemeOption } from './types';

export default function themeTypography(theme: IThemeOption): TypographyOptions {
  return {
    fontFamily: 'Myriad Pro',
    h6: {
      color: theme.heading,
      fontWeight: 400,
      fontSize: '0.85rem',
    },

    h5: {
      color: theme.heading,
      fontWeight: 700,
      fontSize: '1rem',
      fontFamily: 'Myriad Pro',
    },

    h4: {
      color: theme.heading,
      fontWeight: 700,
      fontSize: '1.25rem',
      fontFamily: 'Myriad Pro',
    },
    h3: {
      color: theme.heading,
      fontWeight: 400,
      fontSize: '1.625rem',
      fontFamily: 'Myriad Pro',
    },

    h2: {
      color: theme.heading,
      fontWeight: 400,
      fontSize: '1.77689rem',
      fontFamily: 'Myriad Pro',
      lineHeight: 1.25,
    },

    h1: {
      fontSize: '2.5rem',
      color: theme.heading,
      fontWeight: 400,
      fontFamily: 'Myriad Pro',
      lineHeight: 1.25,
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'Myriad Pro',
    },

    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Myriad Pro',
    },

    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#718d8e',
    },

    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#718d8e',
      lineHeight: 1.66,
      textTransform: 'capitalize',
    },

    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },

    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
    },

    button: {
      textTransform: 'uppercase',
      fontSize: '0.875rem',
    },
  };
}
