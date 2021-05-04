import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  alert: {
    marginBottom: theme.spacing(2),
  },
  toUpper:{
    fontWeight:800,
  },
  button: {
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: 50,
    maxWidth: 450,
  },
  formField: {
    marginTop: theme.spacing(2),
  },
  login: {
    marginTop: theme.spacing(2),
     marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontSize:12,
   fontWeight:600,
   letterSpacing:'2',
  },
  divider:{
  padding:2,
  height:4,
  height:4,
  width: '100%',
  background:theme.palette.grey[50],
  marginBottom:5,
  marginTop:5,

  },
}));

export default useStyles;