import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0,
    display: 'flex',
    padding: theme.spacing(0, 1),
    position: 'sticky',
    top:-0,
    zIndex: 1,
    height:80,
  },
}));

export default useStyles;
