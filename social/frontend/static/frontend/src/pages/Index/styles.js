import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  asideContainer: {
    marginTop:40,
    marginBottom:10,
    backgroundColor: '#FFEFBA',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),

    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
      gridRow: 1,
      height: '100%',
    },
  },
  asideList: {
    '& .MuiListItem-root': {
       marginTop:20,
       marginBottom:0,
      alignItems: 'flex-start',
      color: 'primary',
      display: 'flex',
    },
    '& .MuiTypography-root': {
      fontSize:18,
    },
    '& .MuiSvgIcon-root': {
      color: 'primary',
      fontSize: 30,
      marginTop: theme.spacing(0.5),
    },
  },
  branding: {
    fontSize: 40,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  content: {
    maxWidth: 400,
  },
  ctaItem: {
    marginBottom: theme.spacing(2),
  },
  ctaContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  indexLayout: {
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    },
  },
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      gridColumn: '2 / 2',
      gridRow: 1,
      height: '100%',
    },
  },
}));

export default useStyles;