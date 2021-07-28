import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  like: {
    transition: 'background-color, color, 0.15s ease',

    '&:hover, &:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
      color: theme.palette.primary.main,
    },
  },
  likeText:{
    fontSize:12,
    '&:hover, &:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
      color: "#000",
    },

  },
}));

export default useStyles;
