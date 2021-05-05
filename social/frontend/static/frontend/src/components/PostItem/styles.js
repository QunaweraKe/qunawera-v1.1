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
  divider:{
  padding:2,
  height:0,
  width: '80%',
  background:theme.palette.grey[50],
  marginBottom:10,



  },
  cardActionsRoot: {
    paddingTop: 0,
  },
  likeContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  post: {
    width: '100%',
    marginBottom: theme.spacing(3),
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
 headerReshare:{
  fontSize:11,
  },
  textSize:{
  fontSize:12,

  },
postBody: {
marginTop:2,
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