/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { IThemeOption } from './types';

export default function themeTypography(theme: IThemeOption): TypographyOptions {
  return {
    fontFamily: 'Open Sans',
    h6: {
      color: theme.heading,
      fontWeight: 700,
      fontSize: '0.75rem',
    },

    h5: {
      color: theme.heading,
      fontWeight: 700,
      fontSize: '0.9rem',
      fontFamily: 'Open Sans',
    },

    h4: {
      color: theme.heading,
      fontWeight: 500,
      fontSize: '1.15rem',
      fontFamily: 'Open Sans',
    },
    h3: {
      color: theme.heading,
      fontWeight: 400,
      fontSize: '1.525rem',
      fontFamily: 'Open Sans',
    },

    h2: {
      color: theme.heading,
      fontWeight: 400,
      fontSize: '1.6rem',
      fontFamily: 'Open Sans',
      lineHeight: 1.25,
    },

    h1: {
      fontSize: '2.5rem',
      color: theme.heading,
      fontWeight: 400,
      fontFamily: 'Open Sans',
      lineHeight: 1.25,
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'Open Sans',
    },

    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Open Sans',
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
      fontSize: '0.9rem',
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
