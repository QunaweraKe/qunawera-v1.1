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
    
    fontWeight:"bold",
    textDecoration:"none"
  },
  divider:{
  padding:1,
  height:2,
  width: '80%',
  background:theme.palette.grey[50],
  marginBottom:7,
   marginTop:2,
  },
  listItemSize:{

    color:theme.palette.secondary.main,
  },
  cardActionsRoot: {
    paddingTop: 0,
  },
  chip :{
  display:"flex",

  color:theme.palette.primary.main,
  justifyContent:"center",
   marginBottom:theme.spacing(0),
   marginTop:theme.spacing(0),
    marginLeft:theme.spacing(2),
    borderWidth:".5px",
    borderColor:theme.palette.textSecondary,
  flexWrap:"wrap",
  "& > *":{
  margin:theme.spacing(.1),

  },
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
  fontSize:12,

  },
  cardProps:{
  backgroundColor:theme.palette.grey[50],

  },
  text:{
  marginLeft:"1%"
  },
postBody: {
marginTop:6,
marginBottom:2,
padding: theme.spacing(2, 2, 0.5, 2),
},


  root: {
    ...theme.custom.borders,
    borderBottomWidth: 2,
    position: 'relative',
  },
}));

export default useStyles;