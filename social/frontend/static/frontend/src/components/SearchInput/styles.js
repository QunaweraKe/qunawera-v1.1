import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    
    padding: theme.spacing(1, 2, 1, 1.5),
    flexGrow: 1,
  },
  root: {
    borderRadius:5,
    backgroundColor: theme.palette.common.white,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    marginLeft:theme.spacing(0),
    position:"relative",
    width:"auto"
  },
  divider: {
    height: 28,
    margin: 6,
  },
  inputRoot: {
    flexGrow: 1,
  },

  searchFocus: {
    borderColor: theme.palette.primary.main,
  },
  searchIcon: {
    color: theme.palette.grey[400],
  },
  searchIconFocus: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
