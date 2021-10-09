import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  root: {

  
    height: (size) => size,
    width: (size) => size,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
   
  },

}));

export default useStyles;
