import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
//'#1877F2',
    color: "#1034A6",
    fontFamily:'roboto',
    letterSpacing:'.5px',
    fontSize:14,
     lineHeight:'1px',
     fontWeight:'500',
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      textDecorationColor:theme.palette. secondary,




    },
  },
}));

export default useStyles;