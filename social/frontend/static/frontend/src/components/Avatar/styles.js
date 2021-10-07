import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  root: {

    borderColor: theme.palette.grey[500],
    borderRadius: '50%',
    border: 'solid',
    borderWidth:3,
    height: (size) => size,
    width: (size) => size,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
   
  },

}));

export default useStyles;
