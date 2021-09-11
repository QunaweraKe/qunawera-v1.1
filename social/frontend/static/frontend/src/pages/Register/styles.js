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
 textLink:{

fontWeight:700,
 },
  button: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: 20,
    maxWidth: 450,
  },
  formField: {
    marginTop: theme.spacing(2),
  },
  login: {
    marginTop: theme.spacing(2),
     marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontSize:15,
   fontWeight:600,
   letterSpacing:'2',
  },
  card:{
    marginTop: theme.spacing(2),
  }

}));

export default useStyles;