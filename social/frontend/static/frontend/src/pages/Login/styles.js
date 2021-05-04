import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  alert: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginTop: 50,
    maxWidth: 450,
  },
  formField: {
    marginTop: theme.spacing(2),
  },
  register: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    fontSize:12,
    fontWeight:600,
     letterSpacing:'2',
     marginBottom:theme.spacing(3),
  },
  forgot:{

    marginTop: theme.spacing(5),
    textAlign: 'center',
    fontSize:12,
    letterSpacing:'2',

  },
    visibility:{

     marginTop: theme.spacing(-7),
      marginLeft: theme.spacing(40),


  },


  toUpper:{
  fontWeight:800,

  },
}));

export default useStyles;