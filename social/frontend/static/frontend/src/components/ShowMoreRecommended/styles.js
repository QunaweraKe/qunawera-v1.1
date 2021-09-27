import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(5),
    backgroundColor: 'transparent',
    borderTopColor: theme.custom.border.color,
    borderTopStyle: theme.custom.border.style,
    borderTopWidth: 1,
    color: theme.palette.primary.main,
    display: 'block',
    padding: theme.spacing(1),
    textAlign: 'center',
 
    textDecoration: 'none!important',

    '&:hover, &:focus': {
    
      outline: 'none',
      textDecoration: 'none!important',
    },
  },
}));

export default useStyles;
