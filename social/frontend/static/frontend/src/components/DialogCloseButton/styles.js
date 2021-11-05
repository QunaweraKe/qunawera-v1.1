import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  button: {
    margin: theme.spacing(0, 0.5, 0, -1.5),
    color:"red",
  
  },
}));

export default useStyles;
