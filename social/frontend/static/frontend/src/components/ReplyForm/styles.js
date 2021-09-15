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
  },
  notchedOutline: {
    borderColor: theme.palette.grey[50],
  },
  replyForm: {
    alignItems: 'center',
    display: 'flex',
    position:'sticky'
  },
  textField: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    width:"97%"
    
  },
  backGround:{
    backgroundColor: theme.palette.grey[50],
    marginLeft:theme.spacing(2)
  },
}));

export default useStyles;