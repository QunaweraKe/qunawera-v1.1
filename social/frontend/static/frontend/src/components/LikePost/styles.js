import { fade, makeStyles } from '@material-ui/core/styles';
import {red }from '@material-ui/core/colors/red';
const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  like: {
    transition: 'background-color, color, 0.15s ease',
    color:"red",
    '&:hover, &:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
      color: red,
    },
  },

  likeText:{
    fontFamily:"monospace",
  display:"flex",
  marginLeft:"1%",
  fontWeight:"bold",
    fontSize:11,
  
    '&:hover, &:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
      color: "#000",
    },

  },
}));

export default useStyles;
