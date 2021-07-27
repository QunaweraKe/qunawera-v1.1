import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  alert: {
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginTop: 40,
    maxWidth: 450,
  },
  formField: {
    marginTop: theme.spacing(0),
  },
  register: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    fontSize:15,
    fontWeight:600,
     letterSpacing:'2',
    
  },
  forgot:{

    marginTop: theme.spacing(0),
     marginBottom: theme.spacing(1),
    textAlign: 'right',
    fontSize:15,
    letterSpacing:'2',
    textDecoration:"underline",

  },
    visibility:{

     marginTop: theme.spacing(-7),
      marginLeft: theme.spacing(40),


  },


  toUpper:{
  fontWeight:800,

  textAlign:"center",

  },
}));

export default useStyles;