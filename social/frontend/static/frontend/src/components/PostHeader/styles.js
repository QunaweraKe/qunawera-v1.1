import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',

  },
  headerAvatar: {
    marginRight: 2,
  },
 headerItem:{
  marginLeft:2,
  marginTop:5,

 },
  headerTime : {
     fontSize:12,
     fontWeight:"600",
     marginLeft:2,
  },

}));

export default useStyles;