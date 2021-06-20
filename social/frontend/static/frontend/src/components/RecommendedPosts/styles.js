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
  },
  displayName: {
    color: "black",
    marginBottom: theme.spacing(0.5),
    textDecoration: 'none',

    '&:hover': {
      transition: 'color 0.25s ease',
      textDecoration: 'underline',
    },
  },
  displayPost:{
    textDecoration:"none!important",
  },
  header: {
    alignItems: 'center',
    display: 'flex',
  },
  list: {
    '& li': {
      borderBottom: `5px solid ${theme.palette.grey[50]}`,

      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
    minWidth: 'auto',
  },
  noPosts: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  refreshButton: {
    color: theme.palette.text.primary,
    position: 'absolute',
    left: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
   rootCard: {
    minWidth: 275,
  },
  root: {
    ...theme.custom.borders,
    backgroundColor:theme.palette.grey[50] ,
    borderWidth: 1,
    position: 'relative',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    textAlign:"center",
  },
}));

export default useStyles;
