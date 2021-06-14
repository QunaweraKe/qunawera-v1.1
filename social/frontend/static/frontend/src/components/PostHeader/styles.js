import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',

  },
  headerAvatar: {
    marginRight: 1,
  },
 headerItem:{
  marginRight:2,

 },


  headerTime : {
     fontSize:12,
     fontWeight:"bold",
     marginLeft:2,
  },

}));

export default useStyles;