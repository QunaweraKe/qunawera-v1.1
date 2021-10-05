import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  root: {

    borderColor: theme.palette.grey[100],
    borderRadius: '50%',
    border: 'solid',
    borderWidth:2,
    height: (size) => size,
    width: (size) => size,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
   
  },

}));

export default useStyles;
