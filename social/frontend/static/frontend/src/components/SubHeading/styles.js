import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor:theme.palette.grey[50],
    borderBottomWidth: 0,
    borderColor: '#FFF',
    display: 'flex',
    padding: theme.spacing(0, 1),
    position: 'inherit',
    top:-0,
    zIndex: 1,
    height:80,
  },
}));

export default useStyles;