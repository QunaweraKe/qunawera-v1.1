import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   root: {

    marginTop:15,
    marginLeft:"2%",
    marginRight:"2%",
    marginBottom:2,
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

 
  content: {
    maxWidth: 500,
  },
  ctaItem: {
    marginBottom: theme.spacing(2),
    marginTop:10,
    fontWeight:'bolder',

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