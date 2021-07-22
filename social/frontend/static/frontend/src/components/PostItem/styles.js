import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 3,

  },
  Link:{
  textDecoration :"none",
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
  

  },
  post: {
  
    marginBottom: theme.spacing(3),
    marginLeft : theme.spacing(1),
    
  },
  postAction: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  postContainer: {
    display: 'flex',
    padding: theme.spacing(2, 2, 0.5,2 ),
  },

  textSize:{
  fontSize:14,

  },
subtitle:{
fontSize:"13px",
fontWeight:"bold"
},
  title:{
fontWeight:"bolder"
  },
  text:{
  marginLeft:"1%",
  fontSize:"12px",
  marginTop:"1%",
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