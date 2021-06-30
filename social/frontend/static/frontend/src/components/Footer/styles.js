
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  footer: {
     marginTop: theme.spacing(4),
     position:' absolute' ,
     marginLeft: theme.spacing(1),

    },
  

}));

export default useStyles;
