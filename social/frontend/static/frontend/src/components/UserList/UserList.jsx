import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

// Material UI
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Local
import Avatar from '../Avatar';
import TextLink from '../TextLink';
import { route } from '../../constants';
import { selectUser } from '../../redux/user';
import useStyles from './styles';
import FollowTextLink from '../FollowTextLink';

const UserList = ({ list }) => {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <List className={classes.userList}>
      {list.map((profileUser) => (
        <>
        <ListItem
          className={classes.userListItem}
          key={profileUser.id}
        >
          <ListItemAvatar className={classes.avatar}>
            <Avatar user={profileUser} />
          </ListItemAvatar>
          <ListItemText className={classes.listItemText}>
            {profileUser.slug !== user.slug
              && (
                <FollowTextLink
                  className={classes.followLink}
                  size="small"
                  user={profileUser}
                />
              )}
            <TextLink
              className={classes.displayName}
              to={route.profilePosts(profileUser.slug)}
            >
              {profileUser.display_name}
            </TextLink>
            
            {profileUser.profile.bio
              && (

                <Typography color="textSecondary"
                style={{fontFamily:"monospace",fontSize:"12px"}}>
                 About &middot; {profileUser.profile.bio}
                </Typography>
              )}
              {profileUser.profile.location
              && (

                <Typography color="textSecondary" style =
                {{fontFamily:"monospace",fontSize:"12px"}}>
                 <LocationIcon/> {profileUser.profile.location}
                </Typography>
              )}
          </ListItemText>

        </ListItem>
        <Divider light/>
        </>
      ))}
    </List>
  );
};

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UserList;
