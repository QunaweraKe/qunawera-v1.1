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
     fontSize:10,
  },

}));

export default useStyles;