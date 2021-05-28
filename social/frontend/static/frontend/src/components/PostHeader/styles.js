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



  headerTime : {
     fontSize:13,
  },

}));

export default useStyles;