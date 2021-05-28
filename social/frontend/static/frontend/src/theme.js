// Material UI

import { createMuiTheme, fade } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 940,
      lg: 1260,
    },
  },

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF8800',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {

      main: '#1877F2',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },

    contrastThreshold: 1,

    tonalOffset: 0.6,
  },

  props: {
    MuiAccordion: {
      square: true,
    },
    MuiDialog: {
      fullWidth: true,
    },
    MuiDialogTitle: {
      disableTypography: true,
    },
  },

  shape: {
    borderRadius: 5,
  },
});

//
// Custom styles
//
theme.custom = {
  border: {
    color: theme.palette.grey[50],
    style: 'solid',
  },
  borders: {
    borderColor: theme.palette.grey[50],
    borderStyle: 'solid',
    borderWidth: 2,

  },
};

//
// Overrides
//
theme.overrides = {
//look into this

  MuiAccordion: {
    root: {
      ...theme.custom.borders,
      borderBottomWidth: 5,
      borderTopWidth: 1,
      boxShadow: '1px 3px  rgba(0,0,0,.1)',
      '&:not(:last-child)': {
        borderTop: 0,
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 0,
      },
    },
  },
  MuiAccordionSummary: {
    root: {
      ...theme.custom.borders,
      backgroundColor: theme.palette.grey[50],
      borderBottomWidth: 1,
      marginBottom: -1,
      minHeight: 'auto',
      '&$expanded': {
        minHeight: 'auto',
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 3px',
      },
    },
  },
  MuiButton: {
    contained: {
      boxShadow: '1px 2px 2px 0 rgba(0,0,0,.2)',
      '&:hover, &:focus': {
        boxShadow: '0 2px 2px 2px rgba(0,0,0,.1)',
      },

    },
    root: {
      borderRadius: 2,
      textTransform: 'normal',

    },
    sizeLarge: {
      lineHeight: 1,
      padding: theme.spacing(1.25, 2),
    },
    sizeSmall: {
      lineHeight: 1,
      padding: theme.spacing(0.5, 1.5),
    },
  },
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: "#fff"

       ,
        height: '90%',
      },
      html: {
        height: '100%',
      },
    },
  },
  MuiDialogActions: {
    root: {
      padding: theme.spacing(5),
      '& > button': {
        padding: theme.spacing(2, 5),
      },
    },
  },
  MuiDialogContent: {
    dividers: {
      padding: theme.spacing(4),
    },
  },
  MuiDialogTitle: {
    root: {
      alignItems: 'center',
      display: 'flex',
      padding: theme.spacing(0.25, 2),
      fontSize:15,
    },
  },
  MuiFilledInput: {
    root: {
      backgroundColor: theme.palette.primary.main,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,

      '&:hover': {
        backgroundColor: theme.palette.grey[10],
      },
    },
  },
  MuiListItemIcon: {
    root: {
      marginRight:2,
      minWidth: 0,

    },
  },
  MuiMenu: {
    list: {
      padding: 1,
       backgroundColor:"#fff",
    },
  },
  MuiPaper: {
    elevation1: {
      boxShadow: '2',
    },
    elevation2: {
      boxShadow: '4',
    },

  },
};

export default theme;