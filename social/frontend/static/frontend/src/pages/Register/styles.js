import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  alert: {
    marginBottom: theme.spacing(1),
  },

 helpOutline:{
  fontSize:"15px",
  marginBottom:"3px",
  color:"red",
 marginTop:"4px",
 },
  toUpper:{
    fontWeight:800,
    textAlign:"center",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: 30,
    maxWidth: 450,
  },
  formField: {
    marginTop: theme.spacing(2),
  },
  login: {
    marginTop: theme.spacing(1),
     marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontSize:12,
   fontWeight:600,
   letterSpacing:'2',
  },

}));

export default useStyles;