import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  parentContainer: {
   borderColor:theme.palette.grey[100],
   border:"solid",
   borderWidth:1,
    marginTop: theme.spacing(0),
    padding: theme.spacing(1, 1),
  },
  Link:{
    textDecoration :"none",
    },
    media: {
      borderRadius:"5px",
      paddingTop: '56.25%',
      marginRight: theme.spacing(2),
     
    },

    title: {
      fontWeight: "bolder",
      fontSize: "25px",
    },
}));

export default useStyles;
