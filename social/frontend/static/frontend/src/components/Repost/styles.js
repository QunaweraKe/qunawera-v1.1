import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,

  avatarContainer: {
    marginRight: 14,
  },
input:{
  "&::placeholder":{
    textOverflow:"ellipsis!important",
    fontSize:13,
  }
},
  contentContainer: {
    flexGrow: 1,
  },
   textSize:{
  fontSize:12,
  },
  dialogTitle: {
    margin: 0,
  },
  dialogTitleContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(1),
  },
  inputNotchedOutline: {
    border: '2px',
  },
  inputRoot: {
    margin: theme.spacing(1, 0),
  },
  listItem:{
    linespacing:"1px",
    fontSize:15,
    marginLeft:"2%"
  
  },
  postContainer: {
    display: 'flex',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
 share:{
  
   fontFamily:"monospace",
   fontWeight:"bold",
  fontSize:13,
 },
 shareIcon:{
  marginLeft:theme.spacing(2),
  display:"flex",
  position:"relative"
}
}));

export default useStyles;