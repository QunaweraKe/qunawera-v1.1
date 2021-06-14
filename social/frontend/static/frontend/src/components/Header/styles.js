import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  pushContainer: {
    height: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'fixed',
    width: 60,

    [theme.breakpoints.up('lg')]: {
      width: 225,
    },
  },


  navButtonText: {
    display: 'none',


    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    elevation:3,
    '& .MuiButton-root': {
      fontSize: 20,
      height: 45,
      minWidth: 'initial',
      transitionDuration: theme.transitions.duration.short,
      transitionProperty: 'all',
      transitionTimingFunction: theme.transitions.easing.easeInOut,
      width: 45,

      '&:hover': {
        backgroundColor: fade(theme.palette.primary.light, 0.1),
        color: theme.palette.primary.main,
      },

      [theme.breakpoints.up('lg')]: {
        height: 'auto',
        width: 'auto',
      },
    },
    '& .MuiButton-root .nav-button-text': {
      display: 'none',
      fontSize: 15,
      fontWeight:900,

      [theme.breakpoints.up('lg')]: {
        display: 'inline',
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: 0,

      [theme.breakpoints.up('lg')]: {
        marginRight: theme.spacing(1),
      },
    },
    '& .MuiListItem-root': {
      padding: 0,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      marginLeft: 3,
      marginRight: 0,

      [theme.breakpoints.up('lg')]: {
        marginLeft: 0,
        marginRight: theme.spacing(1),
      },
    },
  },

}));

export default useStyles;
