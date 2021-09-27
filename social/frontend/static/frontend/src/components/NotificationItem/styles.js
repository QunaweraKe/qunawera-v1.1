import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    marginBottom:6,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
  },
  headerItem: {
    marginLeft: 100,
    fontFamily:"monospace",
    fontSize:13,
  
  },
  notification: {
    flexGrow: 1,
  },
  removeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(3),
  },
  root: {
    marginBottom:5,
    borderBottomWidth: 1,
    borderColor: theme.custom.border.color,
    borderStyle: theme.custom.border.style,
    borderWidth:2,
    display: 'flex',
    padding: theme.spacing(1),
    position: 'relative',
  },
}));

export default useStyles;
