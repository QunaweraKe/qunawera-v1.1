
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  footer: {
     marginTop: theme.spacing(5),
     position:' absolute' ,
      marginLeft: theme.spacing(0),

    },
      appBar: {
    position: 'relative',
    backgroundColor:theme.palette.secondary,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  readTerms:{
  border:"none",
  },

}));

export default useStyles;
