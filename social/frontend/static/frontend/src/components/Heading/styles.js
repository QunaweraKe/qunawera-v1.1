import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor:theme.palette.grey[100],
    borderBottomWidth: 0,
    borderColor: '#FFF',
    display: 'flex',
    padding: theme.spacing(0, 1),
    position: 'inherit',
    top:0,
    zIndex: 1,
    height:70,
    marginTop:"2%"
  },
}));

export default useStyles;
