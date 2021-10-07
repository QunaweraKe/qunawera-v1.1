import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  adornment: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1.3),
  },
  avatar: {
    alignSelf: 'flex-start',
  },
  input: {
    paddingRight: 0,
    marginLeft:0,
    minWidth:"150%"
  },
  notchedOutline: {
    borderColor: theme.palette.grey[50],
  },
  replyForm: {
    alignItems: 'center',
    display: 'flex',
    position:'sticky',
    width:"100%"
  },
  textField: {
    flexGrow: 0,
    
  },
  backGround:{
    backgroundColor: "transparent",
    marginLeft:theme.spacing(1)
  },
}));

export default useStyles;