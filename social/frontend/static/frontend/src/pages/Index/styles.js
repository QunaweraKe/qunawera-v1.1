import { fade, makeStyles } from '@material-ui/core/styles';
import {shadows} from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
   root: {

    marginTop:4,
    marginLeft:"2%",
    marginRight:"2%",
    marginBottom:5,
    width:"95%",
  },
  image:{
  marginTop:10,
  },

  asideContainer: {

 
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
   
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
      gridRow: 1,
     
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
    maxWidth: 500,
  },
  ctaItem: {
    marginBottom: theme.spacing(2),
    marginTop:10,

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
    width: '99%',
    height:'70%',
    backgroundColor:"#ffdab9",
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