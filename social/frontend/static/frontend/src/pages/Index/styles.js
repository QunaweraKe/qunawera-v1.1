import { fade, makeStyles } from '@material-ui/core/styles';
import {shadows} from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
   root: {

    marginTop:10,
    marginLeft:"5%",
     marginRight:"5%",
     height:580,
  },
  image:{
  marginTop:10,
  },

  asideContainer: {

    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),

    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
      gridRow: 1,
      height: '100%',
    },
  },
  asideList: {
    '& .MuiListItem-root': {
       marginTop:80,
       marginBottom:0,
      alignItems: 'flex-start',
      color: 'primary',
      display: 'flex-end',
    },
    '& .MuiTypography-root': {
      fontSize:14,

    },
    '& .MuiSvgIcon-root': {
      color: 'primary',
      fontSize: 30,
      marginTop: theme.spacing(0.5),
    },
  },
  branding: {
    fontSize: 40,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  content: {
    maxWidth: 400,
  },
  ctaItem: {
    marginBottom: theme.spacing(1),
    marginTop:0,

  },
  Upper:{
     marginBottom: theme.spacing(5),
     textAlign:"center",

  },
  ctaContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  indexLayout: {
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    },
  },
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      gridColumn: '2 / 2',
      gridRow: 1,
      height: '100%',
    },
  },
}));

export default useStyles;