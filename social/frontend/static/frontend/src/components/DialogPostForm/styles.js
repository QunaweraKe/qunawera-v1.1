import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatarContainer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
  },

  margin: {
    marginTop:7,

  },
  Button: {
    marginTop:25,
    margin:theme.spacing(2),

  },
  


}));

export default useStyles;
