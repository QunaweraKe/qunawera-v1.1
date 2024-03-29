import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authLayout: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'minmax(0, 620px)',
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      // gridTemplateColumns: '225px 600px 350px',
      gridTemplateColumns: '60px minmax(400px, 620px)',
      padding: `0 ${theme.spacing(1)}px`,
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '60px minmax(0, 600px) minmax(0, 350px)',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '275px 600px 350px',
    },
  },
  headerContainer: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mainContainer: {
    // backgroundColor: 'green',
    borderColor: theme.custom.border.color,
    borderLeftStyle: theme.custom.border.style,
    borderLeftWidth: 2,
    borderRightStyle: theme.custom.border.style,
    borderRightWidth: 2,
  },
  asideContainer: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'block',
      padding: theme.spacing(1.5, 0, 0, 2),
    },
  },
   userControlContainer: {
    marginTop: theme.spacing(60),
    width: 260,
  },
}));

export default useStyles;
