import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,

  chip:{
    marginLeft:"80%",
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width:"60px",
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
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
  divider:{
  padding:1,
  height:2,
  width: '95%',
  background:theme.palette.grey[50],
  marginBottom:7,
   marginLeft:10,
  
   marginTop:2,
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
  
    position: 'relative',
  },
}));

export default useStyles;