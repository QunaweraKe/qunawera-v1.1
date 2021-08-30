import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    
    backgroundColor: theme.palette.grey[50],
    backgroundImage: (profileUser) => (
      profileUser.profile?.image
        ? `url('${profileUser.profile.image}')`
        : 'none'
    ),
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderColor: theme.palette.grey[100],
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 3,
    height: 200,
    marginTop: '-18%',
    position: 'relative',
    width: 200,
    marginLeft:"1%"
  },
  avatarAndFollow: {
    display: 'flex',
    padding: theme.spacing(1.5, 2),
  },
  banner: {
    backgroundColor: theme.palette.grey[100],
    backgroundImage: (profileUser) => (
      profileUser.profile?.banner
        ? `url(${profileUser.profile.banner})`
        : 'none'
    ),
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 200,
    position: 'relative',
    width: '100%',
    marginTop:5,
    borderRadius:5,
  
  },
  bio: {
    marginTop: theme.spacing(1),
    fontFamily:"monospace",
  },
  editAvatarButton: {
    position: 'absolute',
    right: -10,
    bottom: 0,
  },
  editBannerButton: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
  },
  extraInfo: {
    alignItems: 'center',
    display: 'flex',
    margin: theme.spacing(1, 2.5, 0, 0),
   
  },
  extraInfoIcon: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.h6.fontSize,
    marginRight: 8,
  },
  extraInfoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
   
  },
  extraInfoText: {
    fontSize: theme.typography.body2.fontSize,
  },
  followButton: {
    marginLeft: 'auto',
  },
  followContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  followCount: {
    fontWeight: 'bolder',
    fontSize:'1.2em',
  },
  followLink: {
    marginRight: theme.spacing(1),
    padding:2,
  },
  imageControlContainer: {
    display: 'flex',
    padding: theme.spacing(1.5, 2),
  },
  infoContainer: {
    borderColor: theme.custom.border.color,
    borderStyle: theme.custom.border.style,
    borderBottomWidth: 1,
    borderWidth: 0,
    padding: theme.spacing(0, 2),
  },
  rootEditImage: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default useStyles;
