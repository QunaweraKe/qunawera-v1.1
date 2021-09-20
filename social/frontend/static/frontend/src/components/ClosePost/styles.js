import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,

  Icon:{
    color:theme.palette.primary.main
  },
  
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
    margin:2,
  
  },
 
}));

export default useStyles;