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
     fontSize:13,
     fontWeight:"500",
     marginLeft:2,
  },

}));

export default useStyles;