import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 1,

  },

 
  
  listItem:{
    linespacing:"1px",
    fontSize:15,
    marginLeft:"2%"
  
  },
  cardActionsRoot: {
    paddingTop: 0,
  },
  
  likeContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    alignSelf: 'flex-end',
  
  },
  status : {
    fontSize:10,
    fontWeight:"600",
    marginLeft:2,
    marginTop:6,
    fontFamily:"monospace"
 },
  repostContainer:{
 display:"flex",
 marginLeft:50,
 marginBottom:10,

  },

  postAction: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(1),
  
   
  },
  postContainer: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: 'auto',
    marginTop: theme.spacing(5),
    width:"100%",
    
   
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
marginTop:1,
marginBottom:2,
padding: theme.spacing(2, 2, 0.5, 2),
},

Link:{
  textDecoration :"none",
  color:"black"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginRight:theme.spacing(6),
    width:"100%"
  },
title:{
  fontweight: "bolder" ,
  marginBottom:"5px",


},
avatarMenu:{
height:"2px",
width:"2px"

},
  root: {
  
    backgroundColor:theme.palette.grey[50],
    position: 'relative',
    flexGrow: 1,
    '&:hover':{
      
      transform:"none !important"
    },
    focus:{
      "&&&":{
        opacity:0
      }
    }
  },
}));

export default useStyles;