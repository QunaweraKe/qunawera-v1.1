import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  postBody: {
    marginTop: theme.spacing(1),
    marginBottom:theme.spacing(3),
  },
  post:{
   fontSize:19,
   fontFamily:"Arial"
  },
  divideColor:{
    backgroundColor:theme.palette.primary.main,
  },
}));

export default useStyles;
