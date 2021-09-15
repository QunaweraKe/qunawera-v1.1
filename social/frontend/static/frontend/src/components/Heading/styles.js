import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
  
    borderBottomWidth: 0,
    display: 'flex',
    padding: theme.spacing(0, 1),
    position: 'inherit',
    top:0,
    zIndex: 1,
    height:70,
    marginTop:"0%",
    
  },
}));

export default useStyles;
