import { Components, colors } from '@mui/material';
import { IThemeOption } from './types';
import variables from './variables';
import { Opacity } from '@mui/icons-material';

export default function componentStyleOverrides(theme: IThemeOption): Components | undefined {
  const bgColor = theme.colors.common.white;

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

    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1500px)': {
            maxWidth: '1500px',
          },
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

    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: variables.borderRadius,
    //     },
    //     input: {
    //       borderRadius: variables.borderRadius,
    //       height: "28px",
    //       fontSize: "1rem",
    //       backgroundColor: theme.colors.common.white,
    //       borderColor: theme.colors.grey[500],
    //       borderWidth: "1.5px",
    //       borderStyle: "solid",
    //       marginTop: 0,
    //       '&:placeholder-shown, &:invalid, &[value=""]': {
    //         borderColor: theme.colors.grey[500],
    //       },
    //       "&:focus": {
    //         backgroundColor: theme.colors.common.white,
    //       },
    //       "&[readonly]": {
    //         padding: "8px 0",
    //         backgroundColor: theme.colors.transparent,
    //         borderColor: theme.colors.transparent,

    //         "&::-webkit-input-placeholder": {
    //           color: "transparent",
    //         },
    //         "&:-moz-placeholder": {
    //           color: "transparent",
    //         },
    //         "&::-moz-placeholder": {
    //           color: "transparent",
    //         },
    //         "&:-ms-input-placeholder": {
    //           color: "transparent",
    //         },
    //         "&::placeholder": {
    //           color: "transparent",
    //         },
    //       },
    //     },
    //     formControl: {
    //       "label + &": {
    //         marginTop: "20px",
    //       },
    //     },
    //     sizeSmall: {
    //       borderRadius: variables.borderRadius,
    //       input: {
    //         height: 17,
    //         fontSize: "0.75rem",
    //         borderRadius: variables.borderRadius,
    //       },
    //     },
    //   },
    // },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.colors.grey[700],
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
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '1rem',
          fontWeight: 700,
          borderRadius: variables.borderRadius,
          marginLeft: '8px',
          color: 'primary.light',
          '&::placeholder': {
            color: 'primary.light',
            fontSize: '1rem',
            fontWeight: 700,
          },
        },
        root: {
          marginTop: 0,
          '& .MuiSvgIcon-root': {
            color: theme.colors.grey[500],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadius,
          background: bgColor,
          // border: "1.5px",
          // "& legend": {
          //   marginLeft: 30,
          //   color: "red",
          // },

          // "& MuiInputLabel-root ": {
          //   marginLeft: 30,
          // },
        },

        notchedOutline: {},
        input: {
          padding: '16.5px 14px 14px 14px',
          ':disabled': {
            background: theme.colors.action.disabled,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 8,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: variables.borderRadius,
          lineHeight: 1,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '15px 20px',
        },
        endIcon: {
          marginLeft: 12,
        },
        text: {
          minWidth: 'unset',
          textTransform: 'none',
          borderWidth: '1.5px',
          border: `solid 1px ${theme.colors.primary.main}`,
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
          borderWidth: '1.5px',
          color: theme.colors.primary.main,
          backgroundColor: theme.colors.common.white,
          borderColor: theme.colors.primary.main,
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: theme.colors.primary.dark,
            color: theme.colors.common.white,
            borderColor: theme.colors.primary.dark,
          },
        },
        contained: {
          borderRadius: variables.borderRadius,
          boxShadow: 'none',
          color: theme.colors.common.white,
          fontWeight: 700,
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
          '&:hover::before': {
            left: 0,
          },
          '&:hover': {
            backgroundColor: theme.colors.primary.dark,
          },
          '&:hover .MuiButton-endIcon': {
            transform: 'translateX(6px)',
            transition: 'transform 0.3s ease-in-out',
          },
          '&:not(:hover) .MuiButton-endIcon': {
            left: 0,
            transition: 'all 0.3s ease-in-out',
          },
        },
        containedSecondary: {
          '&:hover::before': {
            left: 0,
          },
          '&:hover': {
            backgroundColor: theme.colors.secondary.dark,
          },
        },
        sizeSmall: {
          borderRadius: variables.borderRadius,
          padding: 10,
        },

        containedError: {
          backgroundColor: theme.colors.error.main,
          '&:hover': {
            backgroundColor: theme.colors.error.dark,
          },
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
        root: {},
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {},
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
            backgroundColor: theme.colors.grey[200],
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
          borderRadius: variables.borderRadius,
          paddingLeft: 16,
          paddingRight: 16,
          ':hover': {
            background: theme.colors.secondary.main,
            color: theme.colors.secondary.text,
            '& .MuiChip-icon': {
              color: theme.colors.secondary.text,
            },
          },
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

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.colors.grey[700],
        },
      },
    },
  };
}
