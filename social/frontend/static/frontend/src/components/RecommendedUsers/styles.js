import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  cardHeader: {
    ...theme.custom.borders,
    borderBottomWidth: 1,
    marginLeft:theme.spacing(14),
    

  },
  displayName: {
    color: theme.palette.text.primary,
    textDecoration: 'none',

    '&:hover': {
      color: theme.palette.primary.main,
      transition: 'color 0.25s ease',
    },
  },
  header: {
    alignItems: 'center',
    display: 'flex',
  },
  list: {
    marginTop: theme.spacing(1),

    '& li:last-child': {
      marginBottom: theme.spacing(1),
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
    minWidth: 'auto',
  },
  noUsers: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  paper: {
    margin:theme.spacing(1),  
  },
  refreshButton: {
    color: theme.palette.primary.main,
    position: 'absolute',
    left: theme.spacing(0.5),
    top: theme.spacing(0.5),
   
   
  },
  root: {
    ...theme.custom.borders,
    backgroundColor: theme.palette.grey[50],
    borderWidth: 1,
    position: 'relative',
    marginBottom: theme.spacing(2),
    width:"100%",
    padding:theme.spacing(1)
  },
  title: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
