import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor:theme.palette.grey[50],
    borderColor:theme.palette.grey[100],
    display: 'flex',
    position: 'sticky',
    top:-7,
    zIndex: 2,
    height:90,
    marginTop:0,
    borderWidth:1,
    border:"solid",
 
  },
}));

export default useStyles;
