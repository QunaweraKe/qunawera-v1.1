import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


// Material UI
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
// Local


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
          result = `You liked `;
        } else {
          const subLength = likedLength - 1;
          result = `Liked by you and ${subLength} ${pluralizeOther(subLength)}...`;
        }
      } else {
        result = `Liked by ${likedLength} ${pluralizeOther(likedLength)}...`;
      }
    } else {
      result = `Be the first to like `;
    }
    return result;
  };

  return (
    <>
      <IconButton
        className={classes.like}
        color={isLiked ? 'primary' : 'primary'}
      
        onClick={handleLike}
      >
        {isLiked
          ? <FavoriteRoundedIcon fontSize={size}  />
          : < FavoriteBorderRoundedIcon fontSize={size} />}
        
      </IconButton>

      <Typography   className={classes.likeText} color="primary">
        
      
  
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
