import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 3,

  },

  replyHeader:{
    marginBottom:10,
    fontWeight:"bold",
  
  },
  replies:{
  color:theme.palette.primary.main,
  },
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
    marginLeft:"2%"
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  fontSize:"12px",

  

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
    backgroundColor: theme.palette.grey[50]
  },
  title:{
    fontweight: "bolder" ,
    marginBottom:"5px"
  
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

  fontSize:"14px",

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