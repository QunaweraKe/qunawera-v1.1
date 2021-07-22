import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



// Material UI
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LinkIcon from '@material-ui/icons/Link';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import Divider from '@material-ui/core/Divider';
// Local
import TextLink from '../TextLink';
import { route } from '../../constants';
import EditProfile from '../EditProfile';
import FollowButton from '../FollowButton';
import { editProfile, selectUser } from '../../redux/user';
import useStyles from './styles';

const ProfileInfo = ({ loading, profileUser }) => {
  const classes = useStyles(profileUser);
  const dispatch = useDispatch();

  const bannerRef = React.useRef();
  const imageRef = React.useRef();

  const user = useSelector(selectUser);

  const handleChange = (event, field) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append(field, image, image.name);
    dispatch(editProfile(formData, user.slug));
  };

  const handleEditAvatar = () => {
    imageRef.current.click();
  };

  const handleEditBanner = () => {
    bannerRef.current.click();
  };

  const renderProfile = () => {
    let rendered;
    if (profileUser.slug) {
      rendered = (
        <>
          <div className={classes.banner}>
            {user.slug === profileUser.slug && (
              <>
                <input
                  hidden="hidden"
                  onChange={(event) => handleChange(event, 'banner')}
                  ref={bannerRef}
                  type="file"
                />
                <IconButton
                  classes={{ root: classes.rootEditImage }}
                  className={classes.editBannerButton}
                  onClick={handleEditBanner}
                >
                  <CameraAltIcon />
                </IconButton>
              </>
            )}
          </div>
          <div className={classes.avatarAndFollow}>
            <div className={classes.avatar}>
              {user.slug === profileUser.slug && (
                <>
                  <input
                    hidden="hidden"
                    onChange={(event) => handleChange(event, 'image')}
                    ref={imageRef}
                    type="file"
                  />
                  <IconButton
                    classes={{ root: classes.rootEditImage }}
                    className={classes.editAvatarButton}
                    onClick={handleEditAvatar}
                  >
                    <CameraAltIcon />
                  </IconButton>
                </>
              )}
            </div>
            <div className={classes.followButton}>
              {user.slug !== profileUser.slug
                ? (
                  <FollowButton
                    size="large"
                    user={profileUser}
                  />
                ) : (
                  <EditProfile />
                )}
            </div>
          </div>
          <div className={classes.infoContainer}>
            <Typography variant="h6">
              {profileUser.display_name.charAt(0).toUpperCase() + profileUser.display_name.slice(1)}
            </Typography>
            <div className={classes.followContainer}>
              <Paper square elevation={3} style={{ marginLeft: "2px" }}>
                <TextLink
                  className={classes.followLink}
                  to={route.following(profileUser.slug)}
                  variant="body2"
                >
                  <span className={classes.followCount}>


                    &nbsp;Following &middot; {profileUser.following.length}
                  </span>
                </TextLink>
              </Paper>

              <Paper square elevation={3} style={{ marginLeft: "6px" }}>
                <TextLink
                  className={classes.followLink}
                  to={route.followers(profileUser.slug)}
                  variant="body2"
                >
                  <span className={classes.followCount}>

                    &nbsp;Followers &middot; {profileUser.followers.length}

                  </span>
                </TextLink>
              </Paper>
            </div>

            {profileUser.profile.bio
              && (
                <>
                  <Typography variant="h7" style={{ fontWeight: "bolder" }}>
                    About
                  </Typography>
                  <Divider/>
                  <Typography className={classes.bio} color="textSecondary">
                    {profileUser.profile.bio}
                  </Typography>


                </>
              )}


<Divider/>
            <div className={classes.extraInfoContainer}>
              <div className={classes.extraInfo}>
                <EventNoteIcon className={classes.extraInfoIcon} />
                <Typography className={classes.extraInfoText}>

                  Joined
                  {' '}
                  {dayjs(profileUser.created_at).format('DD MMMM YYYY')}

                </Typography>
                <br />
              </div>
              {profileUser.profile.location
                && (
                  <div className={classes.extraInfo}>
                    <LocationIcon className={classes.extraInfoIcon} />
                    <Typography className={classes.extraInfoText}>
                      Lives in  {profileUser.profile.location}
                    </Typography>
                  </div>
                )}

              {profileUser.profile.website
                && (
                  <div className={classes.extraInfo}>
                    <LinkIcon className={classes.extraInfoIcon} />
                    <Link
                      href={profileUser.profile.website}
                      target="_blank"
                    >
                      {profileUser.profile.website}
                    </Link>
                  </div>
                )}
            </div>

          </div>
        </>
      );
    } else {
      rendered = (
        <>
          <div className={classes.banner} />
          <div className={classes.avatarAndFollow}>
            <div className={classes.avatar} />
          </div>
          {!loading
            && (
              // TODO
              <p>User does not exist</p>
            )}
        </>
      );
    }
    return rendered;
  };

  return renderProfile();
};

export default ProfileInfo;
