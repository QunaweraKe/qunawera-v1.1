import { makeStyles } from '@material-ui/core/styles';
import {yellow} from  '@material-ui/core/colors/yellow';
const useStyles = makeStyles((theme) => ({

  ...theme.custom,

  Icon:{
    color:"yellow"
  },
  
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
    margin:2,
  
  },
 
}));

export default useStyles;