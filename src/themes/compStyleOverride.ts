import { Components } from '@mui/material';
import { IThemeOption } from './types';
import variables from './variables';

export default function componentStyleOverrides(theme: IThemeOption): Components | undefined {

  return {
    MuiCssBaseline: {
      styleOverrides: {
        '.highlight-mention': {
          color: theme.colors.primary.main,
          fontWeight: 'inherit',
          textDecoration: 'none',
        },
        ':root': {
          '--primary-main': theme.colors.primary.main,
          '--primary-light': theme.colors.primary.light,
          '--primary-dark': theme.colors.primary.dark,
          // secondary
          '--secondary-main': theme.colors.secondary.main,
          '--secondary-light': theme.colors.secondary.light,
          '--secondary-dark': theme.colors.secondary.dark,
          // success
          '--success-main': theme.colors.success.main,
          '--success-light': theme.colors.success.light,
          '--success-dark': theme.colors.success.dark,
          // error
          '--error-main': theme.colors.error.main,
          '--error-light': theme.colors.error.light,
          '--error-dark': theme.colors.error.dark,
          // info
          '--info-main': theme.colors.info.main,
          '--info-light': theme.colors.info.light,
          '--info-dark': theme.colors.info.dark,
          // warning
          '--warning-main': theme.colors.warning.main,
          '--warning-light': theme.colors.warning.light,
          '--warning-dark': theme.colors.warning.dark,
          // grey
          '--grey-50': theme.colors.grey[50],
          '--grey-100': theme.colors.grey[100],
          '--grey-200': theme.colors.grey[200],
          '--grey-300': theme.colors.grey[300],
          '--grey-400': theme.colors.grey[400],
          '--grey-500': theme.colors.grey[500],
          '--grey-600': theme.colors.grey[600],
          '--grey-700': theme.colors.grey[700],
          '--grey-800': theme.colors.grey[800],
          '--grey-900': theme.colors.grey[900],

          // divider
          '--divider': theme.colors.divider,

          // text
          '--text-primary': theme.colors.primary.text,
          '--text-secondary': theme.colors.secondary.text,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        message: {
          padding: '4px 0',
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {},
        input: {
          padding: '8px 6px',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {},
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiOutlinedInput-notchedOutline": {
    //         display: "none",
    //       },
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiSvgIcon-root": {
    //         // paddingRight: "16px",
    //         // paddingLeft: "8px",
    //       },
    //     },
    //   },
    // },

    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1700px)': {
            maxWidth: '100%',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
          padding: '0px !important',
        },
        maxWidthLg: 1700,
        maxWidthMd: 1700,
        maxWidthSm: 1440,
        maxWidthXl: 1440,
        maxWidthXs: 1440,
        fixed: {
          width: '100%',
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.colors.common.black,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: theme.colors.common.black,
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 16,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadiusLg,
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 400,
          lineHeight: '21px',
          padding: '11.5px 32px',
        },
        endIcon: {
          marginLeft: 12,
        },
        text: {
          borderWidth: '1.5px',
          border: `solid 1px ${theme.colors.primary.main}`,
          padding: '10px 32px',

          color: theme.colors.common.black,
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.colors.common.black,
          },
          '&:active': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        outlined: {
          border: `solid 1px ${theme.colors.primary.main}`,
          color: theme.colors.primary.main,
          backgroundColor: theme.colors.common.white,
          borderColor: theme.colors.primary.main,
          // "&:hover": {
          //   color: theme.colors.common.white,
          //   borderColor: theme.colors.primary.main,
          // },
          padding: '10px 32px',
        },
        contained: {
          color: theme.colors.common.white,
          zIndex: 1,
          '&.Mui-disabled': {
            color: theme.colors.grey[700],
            backgroundColor: theme.colors.grey[500],
          },

          position: 'relative',
          overflow: 'hidden',
          // "&::before": {
          //   content: '""',
          //   position: "absolute",
          //   top: 0,
          //   left: "-100%",
          //   width: "100%",
          //   height: "100%",
          //   backgroundColor: theme.colors.primary.light,
          //   transition: "all 0.3s ease-in-out",
          //   opacity: 0.2,
          // },
          // "&:hover::before": {
          //   left: 0,
          // },
          // ":hover": {
          //   color: theme.colors.primary.text,
          //   borderColor: theme.colors.primary.dark,
          // },
          // "&:hover .MuiButton-endIcon": {
          //   transform: "translateX(6px)",
          //   transition: "transform 0.3s ease-in-out",
          // },
          // "&:not(:hover) .MuiButton-endIcon": {
          //   left: 0,
          //   transition: "all 0.3s ease-in-out",
          // },
        },
        sizeSmall: {
          padding: '6px 16px',
        },
      },
    },

    MuiRating: {
      defaultProps: {
        precision: 0.1,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.colors.primary.main,
          textDecoration: 'none',
          fontFamily: 'Myriad Pro',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '21px',
          letterSpacing: '0.3px',
          textDecorationLine: 'underline',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'white',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          padding: '40px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: variables.fontSizeHeading2,
          padding: '40px 40px 16px 40px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 40px 40px 40px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px 40px 40px 40px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          background: 'white',
          color: theme.colors.common.black,
          fontSize: variables.fontSizeDefault,
          '& .Mui-selected': {
            background: `${theme.colors.primary.main}`,
          },
        },
        selected: {
          background: `${theme.colors.primary.main}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.common.white,
          borderRadius: variables.borderRadiusCard,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          '& .MuiTooltip-tooltip': {
            backgroundColor: theme.colors.grey[700],
          },
          '& .MuiTooltip-arrow': {
            color: theme.colors.grey[200],
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.colors.grey[500],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadiusLg,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.colors.common.black,
        },
      },
    },

    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          ':hover': {
            color: theme.colors.common.black,
          },
        },
        icon: {
          color: `${theme.colors.common.black} !important`,
          opacity: 0.1,
        },

        iconDirectionAsc: {
          ':active': {
            color: `${theme.colors.common.black} !important`,
            opacity: 1,
          },
        },
        iconDirectionDesc: {
          ':active': {
            opacity: 1,
            color: `${theme.colors.common.black} !important`,
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          color: 'black',
        },
      },
    },
  };
}
