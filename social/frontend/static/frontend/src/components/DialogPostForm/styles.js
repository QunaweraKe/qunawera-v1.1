import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatarContainer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
  },
  contentContainer: {
    display: 'flex',
  },

  input: {
    padding: theme.spacing(2, 0),
  },
  inputContainer: {
    flexGrow: 1,
    
  },
  margin: {
    marginTop:15,

  },
  Button: {
    marginTop:25,
    margin:theme.spacing(2),

  },
  backGround:{
    backgroundColor: theme.palette.grey[50],
   
  },


}));

export default useStyles;
