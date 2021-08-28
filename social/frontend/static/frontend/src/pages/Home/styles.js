import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  heading: {
    marginBottom: 10,
  },
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
 Paper:{
    
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(4),

  },

}));

export default useStyles;
