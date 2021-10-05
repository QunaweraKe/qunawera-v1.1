import { makeStyles } from '@material-ui/core/styles';
import {green} from  '@material-ui/core/colors/green';
const useStyles = makeStyles((theme) => ({

  ...theme.custom,

  Icon:{
    color:'green',
  },
  
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
    margin:2,
  
  },
 
}));

export default useStyles;