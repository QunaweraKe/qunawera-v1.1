import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Evergreen  UI
import { ThumbsUpIcon } from 'evergreen-ui'
// Material UI
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


// Local
import CircularProgress from '../CircularProgress';

import useUI from '../../hooks/useUI';

import {
  createLike,
  key,
  removeLike,
  selectLiked,
  selectPost,
} from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';

const LikePost = ({ postId, size, type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const post = useSelector((s) => selectPost(s, postId));
  const isLiked = useSelector((s) => selectLiked(s, post.id, user.id));

  const { loading } = useUI(key.like(post.id), null, false);

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeLike(post.id, user.id));
    } else {
      dispatch(createLike(post.id, user.id));
    }
  };

  const renderLikeText = () => {
    const pluralizeOther = (length) => (length > 1 ? 'others' : 'other');
    const likedLength = post.liked.length;
    let result;
    if (likedLength > 0) {
      if (isLiked) {
        if (likedLength === 1) {
          result = `You liked this `;
        } else {
          const subLength = likedLength - 1;
          result = `Liked by you and ${subLength} ${pluralizeOther(subLength)}`;
        }
      } else {
        result = `Liked by ${likedLength} ${pluralizeOther(likedLength)}`;
      }
    } else {
      result = `Like `;
    }
    return result;
  };

  return (
    <>
      <IconButton
        className={classes.like}
        color={isLiked ? 'primary' : 'default'}
        disabled={loading}
        onClick={handleLike}
      >
        {isLiked
          ? <ThumbsUpIcon fontSize={size} />
          : <ThumbsUpIcon fontSize={size} />}
        {loading && <CircularProgress />}
      </IconButton>
      <Typography
        className={classes.likeText}
        color="textSecondary"
        variant="body2"
      >
        {renderLikeText()}
      </Typography>
    </>
  );
};

LikePost.propTypes = {
  postId: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
 
};

export default LikePost;
