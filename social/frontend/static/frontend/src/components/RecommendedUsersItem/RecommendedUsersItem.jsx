import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

// Local
import Avatar from '../Avatar';
import FollowButton from '../FollowButton';

import { route } from '../../constants';

import useStyles from './styles';

const RecommendedUserItem = ({ user }) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar className={classes.listItemAvatar}>
        <Avatar
          className={classes.avatar}
          user={user}
          size={50}
        />
      </ListItemAvatar>
      <ListItemText
        primary={user.display_name.charAt(0).toUpperCase() + user.display_name.slice(1)}
        primaryTypographyProps={{
          className: classes.displayName,
          component: Link,
          to: route.profilePosts(user.slug),
          variant: 'body2',
          
        }}
        style={{fontWeight:700,}}
      />
      <ListItemSecondaryAction>
        <FollowButton user={user} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

RecommendedUserItem.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecommendedUserItem;
