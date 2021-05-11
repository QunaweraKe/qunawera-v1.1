import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  adornment: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1.3),
  },
  avatarContainer: {
    marginRight: 14,
  },
  card: {
    borderColor: theme.palette.grey[400],
    marginBottom: theme.spacing(2),
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
    border: 'none',
  },
  inputRoot: {
    margin: theme.spacing(1, 0),
  },
    chip :{
  color:theme.palette.primary.main,
  justifyContent:"center",
   marginBottom:theme.spacing(0),
   marginTop:theme.spacing(0),
    marginLeft:theme.spacing(0),
    borderWidth:".5px",
    borderColor:theme.palette.textSecondary,
    border:"solid",
  flexWrap:"wrap",
  "& > *":{
  margin:theme.spacing(.1),

  },
  },
  postContainer: {
    display: 'flex',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;