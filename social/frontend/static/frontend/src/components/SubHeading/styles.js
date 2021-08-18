import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor:theme.palette.grey[100],
   
    borderColor:theme.palette.grey[100],
    display: 'flex',
    position: 'sticky',
    top:-5,
    zIndex: 1,
    height:90,
    marginTop:0,
  },
}));

export default useStyles;
