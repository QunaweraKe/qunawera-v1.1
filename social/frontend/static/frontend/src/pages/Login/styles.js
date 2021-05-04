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
  },
  forgot:{

     marginTop: theme.spacing(2),
    textAlign: 'center',
    fontSize:12,
    fontWeight:600,
    letterSpacing:'2',

  },
    visibility:{

     marginTop: theme.spacing(-7),
      marginLeft: theme.spacing(40),


  },
  divider:{
  padding:2,
  height:4,
  height:4,
  width: '100%',
  background:theme.palette.grey[50],
  marginBottom:10,
  marginTop:10,



  },
}));

export default useStyles;