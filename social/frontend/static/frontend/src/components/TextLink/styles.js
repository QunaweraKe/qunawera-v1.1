import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

    color: '#1877F2',
    fontFamily:'cursive',
    letterSpacing:'2',
    fontSize:14,
     lineHeight:'1',
     fontWeight:'500',
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      textDecorationColor: '#1877F2',




    },
  },
}));

export default useStyles;