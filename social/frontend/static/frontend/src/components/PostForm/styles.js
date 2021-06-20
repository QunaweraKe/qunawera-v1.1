import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatarContainer: {
    alignSelf: 'flex-start',
  },
  submitButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(10),
  },
  inputBaseRoot: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1.75),
  },
  postForm: {
    alignItems: 'center',
    display: 'flex',
    overflow: 'hidden',

  },
  root: {
    ...theme.custom.borders,
    borderBottomWidth:10,
    padding: theme.spacing(2),

  },
  submitButton: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  textField: {
    flexGrow: 1,
    margin: theme.spacing(0, 3, 0, 2),
    backgroundColor: theme.palette.grey[50],
  },
}));

export default useStyles;
