import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  parentContainer: {
    backgroundColor: theme.palette.grey[50],
    marginTop: theme.spacing(0),
    padding: theme.spacing(1, 2),
  },
  Link:{
    textDecoration :"none",
    },
    media: {
     
      paddingTop: '56.25%',
      marginRight: theme.spacing(2),
      width: "100%",
      
    },
}));

export default useStyles;
