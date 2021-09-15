import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatar: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    marginLeft:0,
  },
  control: {
  },
  text: {
    borderRadius:5,
    backgroundColor: theme.palette.grey[100],
    marginBottom: theme.spacing(0.25),
    padding: theme.spacing(0.5, 2),
  },
  textAndControl: {
    display: 'flex',
  },
  displayName: {
    marginRight: theme.spacing(2),
  },
  likeContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    position:"relative"
  },
  textAndInteractContainer: {
    marginLeft: theme.spacing(2),
  },
  displayDate: {
    marginLeft: theme.spacing(0),
    fontWeight:"bold",
    fontSize:10,
    marginTop:theme.spacing(2),
    
  },
}));

export default useStyles;
