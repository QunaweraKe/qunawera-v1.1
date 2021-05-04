
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  footer: {
     marginTop: theme.spacing(10),
     position:' absolute' ,
      marginLeft: theme.spacing(10),



    },
}));

export default useStyles;
