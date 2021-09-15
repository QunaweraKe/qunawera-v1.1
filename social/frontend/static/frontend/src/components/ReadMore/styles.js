import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  readMore:{
    color:theme.palette.secondary.main,
    textDecoration:"underline",
    letterSpacing:"1px",
    cursor:"pointer",
    
        },
}));

export default useStyles;
