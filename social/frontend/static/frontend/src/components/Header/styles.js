import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  pushContainer: {
    height: '110%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '120%',
    position: 'fixed',
    width: 60,

    [theme.breakpoints.up('lg')]: {
      width: 225,
    },
  },


  navButtonText: {
    display: 'none',


  
  },
  navList: {
    width: '110%',
    maxWidth: 360,
   
    marginTop:6,
    borderRadius:5,
    elevation:3,
    '& .MuiButton-root': {
      marginLeft:5,
      fontSize: 25,
      height: 45,
      minWidth: 'initial',
      transitionDuration: theme.transitions.duration.short,
      transitionProperty: 'all',
      transitionTimingFunction: theme.transitions.easing.easeInOut,
      width: 100,

      '&:hover': {
        backgroundColor: fade(theme.palette.primary.light, 0.5),
        
        
      },

      [theme.breakpoints.up('lg')]: {
        height: 'auto',
        width: 'auto',
      },
    },
    '& .MuiButton-root .nav-button-text': {
      display: 'none',
      fontSize:16,
     

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

  footer:{
    display: 'none',
  

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },


  },

}));

export default useStyles;
