import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    fontWeight:"bold",
    fontSize:"15px",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    width:"100%",
    padding:5,
  },
}));

export default useStyles;
