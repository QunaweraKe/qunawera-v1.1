import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  heading: {
    marginBottom: 10,
  },
}));

export default useStyles;
