import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginBottom: theme.spacing(2),
  },
  buttonAvatar: {
    cursor: 'pointer',
    marginRight: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  follow: {
   fontWeight:"bold",
    color: theme.palette.text.secondary,
    '&:last-child': {
      marginLeft: theme.spacing(2),

    },
  },

 
  list: {
    width: 350,
    color:theme.palette.primary.main,
  },

  logout: {
    borderTopColor: theme.custom.border.color,
    borderTopStyle: theme.custom.border.style,
    borderTopWidth: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  titleContainer: {
    alignItems: 'center',
    borderBottomColor: theme.custom.border.color,
    borderBottomStyle: theme.custom.border.style,
    borderBottomWidth: 5,
    display: 'flex',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1, 2),


  },
  userInfoContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 2),
  },
}));

export default useStyles;
