import { makeStyles } from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors/red';
const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  button: {
    width: '45%',
    backgroundColor:'red',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
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
    marginLeft:theme.spacing(2),
  
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
