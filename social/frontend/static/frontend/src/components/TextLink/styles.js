import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
//'#1877F2',
    color: theme.palette. secondary,
    fontFamily:'cursive',
    letterSpacing:'1px',
    fontSize:14,
     lineHeight:'1px',
     fontWeight:'700',
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      textDecorationColor:theme.palette. secondary,




    },
  },
}));

export default useStyles;