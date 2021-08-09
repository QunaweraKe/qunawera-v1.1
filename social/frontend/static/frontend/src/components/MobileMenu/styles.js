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
    fontWeight:"bolder"
  },

  logout: {
  marginLeft:"5%",
    marginTop:5,
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  titleContainer: {
    display:"flex",
    alignItems: 'right',
    borderBottomColor: theme.custom.border.color,
    borderBottomStyle: theme.custom.border.style,
    borderBottomWidth: 5,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1, 2),


  },
  userInfoContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 2),
  },
}));

export default useStyles;
