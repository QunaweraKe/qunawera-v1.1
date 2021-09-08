import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.custom.borders,
    alignItems: 'center',
    backgroundColor:theme.palette.grey[50],
    display: 'flex',
    position: 'sticky',
    top:-7,
    zIndex: 3,
    height:90,
    marginTop:0,
    borderWidth:1,
    border:"solid",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginBottom:5,
 
  },
}));

export default useStyles;
