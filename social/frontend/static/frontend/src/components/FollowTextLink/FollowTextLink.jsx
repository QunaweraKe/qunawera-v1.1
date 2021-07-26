import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import IconButton from '@material-ui/core/IconButton';

// Local
import CircularProgress from '../CircularProgress';
import useUI from '../../hooks/useUI';

import {
  follow,
  key,
  selectFollowing,
  unfollow,
} from '../../redux/user';

const FollowTextLink = ({ className, user, }) => {
  const dispatch = useDispatch();

  const following = useSelector((s) => selectFollowing(s, user.id));

  const { loading } = useUI(key.follow(user.id), null, false);

  const handleFollow = () => {
    if (following) {
      dispatch(unfollow(user.slug, user.id));
    } else {
      dispatch(follow(user.slug, user.id));
    }
  };

  return (
    <IconButton
      color="primary"
      className={className}
      disabled={loading}
      onClick={handleFollow}
     size="small"
    >
      {following ? 'following' : 'follow'}
      {loading && <CircularProgress />}
     
    </IconButton>
  );
};

FollowTextLink.defaultProps = {
  className: null,
};

FollowTextLink.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
 
};

export default FollowTextLink;