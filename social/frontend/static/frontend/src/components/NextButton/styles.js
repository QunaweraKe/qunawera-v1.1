import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    fontWeight:"bold",

    marginBottom: theme.spacing(2),
    width: '100%',
  },
}));

export default useStyles;
