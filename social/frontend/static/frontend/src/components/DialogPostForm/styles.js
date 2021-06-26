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
    margin: theme.spacing(1),
  },


}));

export default useStyles;
