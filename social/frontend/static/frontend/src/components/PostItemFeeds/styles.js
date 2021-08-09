import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  ...theme.custom,


  avatarContainer: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 1,

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
  repostContainer:{
 display:"flex",
 marginLeft:50,
 marginBottom:10,

  },

  postAction: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  postContainer: {
    display: 'flex',
    padding: theme.spacing(2),
    margin: 'auto',
    width: "100%",
    backgroundColor: theme.palette.grey[50]
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
marginTop:0,
marginBottom:2,
padding: theme.spacing(2, 2, 0.5, 2),
},

Link:{
  textDecoration :"none",
  color:"black"
  },


  root: {
    ...theme.custom.borders,
  
    position: 'relative',
    flexGrow: 1,
  },
}));

export default useStyles;