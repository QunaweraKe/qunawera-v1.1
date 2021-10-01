import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import relativeTime from 'dayjs/plugin/relativeTime';

// Material UI

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LinkIcon from '@material-ui/icons/Link';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
// Local

import TextLink from '../TextLink';
import { route } from '../../constants';
import EditProfile from '../EditProfile';
import FollowButton from '../FollowButton';
import { editProfile, selectUser,removeImage } from '../../redux/user';
import useStyles from './styles';

const ProfileInfo = ({ loading, profileUser }) => {
  const classes = useStyles(profileUser);
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  const bannerRef = React.useRef();
  const imageRef = React.useRef();

  const user = useSelector(selectUser);

  const handleChange = (event, field) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append(field, image, image.name);
    
    dispatch(editProfile(formData, user.slug));
    console.log(formData)
  };

  const handleEditAvatar = () => {
    imageRef.current.click();
   
  };
 const removeProfileImage=() =>{
  dispatch(removeImage());
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
                  color="primary"
                >
                  <AddAPhotoIcon />
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
                    color="primary"
                  >
                    <AddAPhotoIcon />
                  </IconButton>
                  <Button
                  classes={{ root: classes.rootEditImage }}
                  className={classes.editBannerButton}
                  onClick={removeProfileImage}
                 
                >
                  remove image
                </Button>
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
            <Card variant="outlined" square>
            <Typography variant="h6"
             style={{ fontFamily:"monospace"}}>
            <span style={{ fontWeight: "bolder" }}>Profile info</span>
            </Typography>
            <Paper square elevation={1} style={{ marginLeft: "2px" }}>
            
           
            <Typography variant="body"
             style={{ fontFamily:"monospace"}}>
               {profileUser.name.charAt(0).toUpperCase() + profileUser.name.slice(1)}

            </Typography>
            <Typography variant="subtitle" color="textSecondary"
           style={{ fontWeight: "bolder",fontFamily:"monospace" }}>
             ({profileUser.display_name.charAt(0).toUpperCase() + profileUser.display_name.slice(1)})
            </Typography>
            </Paper>
           
         
      
            {profileUser.profile.bio
              && (
                <>
                  <Typography variant="h6" style={{ fontWeight: "bolder",fontFamily:"monospace" }}>
                    About
                  </Typography>
                  <Divider/>
                  <Typography className={classes.bio} color="textSecondary">
                    {profileUser.profile.bio}
                  </Typography>

                  <Divider />
                </>
              )}


            <div className={classes.extraInfoContainer}>
              <div className={classes.extraInfo}>
                <EventNoteIcon className={classes.extraInfoIcon} />
                <Typography className={classes.extraInfoText}
                style={{fontFamily:"monospace"}}
                color="textSecondary">

                  Joined  on
                  {' '}
                  {dayjs(profileUser.created_at).format('DD MMMM YYYY')}

                </Typography>
                <br />


              </div>
              {profileUser.profile.location
                && (
                  <div className={classes.extraInfo}>
                    <LocationIcon className={classes.extraInfoIcon} />
                    <Typography className={classes.extraInfoText}
                    style={{fontFamily:"monospace",
                    fontWeight:"bold"}}
                    color="textSecondary">
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
<div className={classes.followContainer}>
              <Paper square elevation={1} style={{ marginLeft: "2px" }}>
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
              
              <Paper square elevation={1} style={{ marginLeft: "6px" }}>
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
            </Card>
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
