import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  button: {
    width: '45%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 400,
    textAlign: 'center',
  },
  text: {
    marginBottom: theme.spacing(2),
    marginLeft:theme.spacing(1),
    fontWeight:"bold"
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
