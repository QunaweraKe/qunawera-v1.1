import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

// Evergreen  UI
import { ThumbsUpIcon } from 'evergreen-ui'
// Material UI
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';

// Local

import { route } from '../../constants';

import {
  createLike,
  removeLike,
  selectLiked,
  selectPost,
} from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';

const LikePost = ({ postId, size }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const post = useSelector((s) => selectPost(s, postId));
  const isLiked = useSelector((s) => selectLiked(s, post.id, user.id));


  const handleLike= async (event) => {
    event.preventDefault();
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
      
        onClick={handleLike}
      >
        {isLiked
          ? <ThumbsUpIcon fontSize={size} />
          : <ThumbsUpIcon fontSize={size} />}
        
      </IconButton>
      <Button
       component={Link}
        className={classes.likeText}
        color="textSecondary"
        to={route.postDetailLikes(postId)}
      >
        {renderLikeText()}
      </Button>
    </>
  );
};

LikePost.propTypes = {
  postId: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
 
};

export default LikePost;
