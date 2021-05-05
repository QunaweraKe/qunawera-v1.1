import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  headerAvatar: {
    marginRight: 4,
  },
  headerItem: {
    fontSize:16,
    marginLeft: 4,
    lineHeight:2,

    '&:first-child': {
      marginLeft: 0,
    },
  },

  headerTime : {
     fontSize:12,
  },

}));

export default useStyles;