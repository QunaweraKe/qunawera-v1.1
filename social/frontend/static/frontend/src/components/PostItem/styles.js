import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    fontSize:8,
  },
  replyHeader:{
    marginBottom:10,
    fontWeight:"bold",
  
  },
  replies:{
  color:theme.palette.primary.main,
  },
  
  listItemSize:{

    color:theme.palette.textSecondary,
  },
  cardActionsRoot: {
    paddingTop: 0,
  },
  
  likeContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },

  pluralize : {
  fontSize:"10px",
  fontWeight:"bold",
  marginLeft:theme.spacing(2)

  },
  post: {
  
    marginBottom: theme.spacing(3),
    marginLeft : theme.spacing(2),
    
  },
  postAction: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  postContainer: {
    display: 'flex',
    padding: theme.spacing(2, 2, 0.5, 2),
  },

  textSize:{
  fontSize:14,

  },
  cardProps:{
  backgroundColor:theme.palette.grey[50],
  borderRadius:"borderRadius",
  marginTop:theme.spacing(2),




  },
  title:{
fontWeight:"bolder"
  },
  text:{
  marginLeft:"1%",
  marginRight:"1%",
  fontSize:13,
  },
postBody: {
marginTop:6,
marginBottom:2,
padding: theme.spacing(2, 2, 0.5, 2),
},


  root: {
    ...theme.custom.borders,
  
    position: 'relative',
  },
}));

export default useStyles;