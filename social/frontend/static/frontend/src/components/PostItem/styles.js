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
  likeContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  post: {
    width: '90%',
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
 headerReshare:{
  fontSize:12,
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