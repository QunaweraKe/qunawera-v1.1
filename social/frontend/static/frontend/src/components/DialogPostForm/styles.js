import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatarContainer: {
    marginRight: theme.spacing(2),
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



}));

export default useStyles;
