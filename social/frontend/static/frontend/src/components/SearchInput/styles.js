import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    
    padding: theme.spacing(1, 2, 1, 1.5),

  },
  root: {
    borderColor:theme.palette.primary.main,
    borderRadius:5,
    border:"solid",
    borderWidth:1,
    backgroundColor: theme.palette.common.white,
    position: 'sticky',
    top: -2,
    zIndex: 2,
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    marginLeft:theme.spacing(0),
    position:"relative",
    width:"auto",
    height:60,
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
    marginLeft:3,
  },
  searchIconFocus: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
