import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
   
    display: 'absolute',
    flexWrap: 'wrap',
    marginBottom:0,

  },
  headerAvatar: {
    marginRight: 2,
  },
 headerItem:{
  marginLeft:2,
  marginTop:5,


 },
  headerTime : {
     fontSize:10,
     fontWeight:"600",
     marginLeft:5,
     marginTop:6,
     marginRight:6,
     fontFamily:"monospace"
  },

}));

export default useStyles;