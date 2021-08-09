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
    textDecoration:'underline',
  },
  displayName: {
    color: "black",
    marginBottom: theme.spacing(2),
    textDecoration: 'none',

    '&:hover': {
      transition: 'color 0.25s ease',
      textDecoration: 'underline',
    },
  },
  
  displayPost:{
    textDecoration:"none!important",
    width: '100%',
    maxWidth: 360,
    marginTop:20,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
  },
  list: {
    '& li': {
      borderBottom: `2px solid ${theme.palette.grey[50]}`,
    
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
    color: theme.palette.primary.main,
    position: 'absolute',
    left: theme.spacing(0.5),
    top: theme.spacing(0.5),
   
   
  },
   
  root: {
    ...theme.custom.borders,
    backgroundColor:theme.palette.grey[50] ,
    borderWidth: 1,
    position: 'relative',
    marginBottom: theme.spacing(2),
    width:"90%",
  },
  title: {
    fontWeight: 'bold',
    textAlign:"center",
  },
}));

export default useStyles;
