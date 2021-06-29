
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  footer: {
     marginTop: theme.spacing(1),
     position:' absolute' ,
    marginLeft: theme.spacing(-2),

    },


}));

export default useStyles;
