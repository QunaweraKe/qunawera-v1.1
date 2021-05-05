import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//EVERGREEN UI
import { LinkIcon } from 'evergreen-ui'
// Material UI
import Button from '@material-ui/core/Button';

// Local
import CircularProgress from '../CircularProgress';

import useUI from '../../hooks/useUI';

import {
  follow,
  key,
  selectFollowing,
  unfollow,
} from '../../redux/user';

const FollowButton = ({ className, user, size }) => {
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
    <Button
      color="primary"
      className={className}
      disabled={loading}
      edge="end"
      onClick={handleFollow}
      size="small"
      variant="outlined"
      style={{ boxShadow: '2px 4px  rgba(0,0,0,.2)'}}
    >
      {following ? 'linked' : 'link'}
      {loading && <CircularProgress />}
      <LinkIcon/>
    </Button>
  );
};

FollowButton.defaultProps = {
  className: null,
  size: 'small',
};

FollowButton.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default FollowButton;