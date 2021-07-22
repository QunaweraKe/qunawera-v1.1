import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
errorimg:{
  marginLeft:"20%",
  height:"300px",
  width:"300px",
  backgroundRepeat:"no-repeat"
}
}));

export default useStyles;
