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



  headerTime : {
     fontSize:12,
  },

}));

export default useStyles;