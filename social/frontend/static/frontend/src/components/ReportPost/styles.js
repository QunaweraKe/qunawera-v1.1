import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
  
  },
 paper:{
minWidth:450,
height:"auto",
padding:8,
 },
}));

export default useStyles;