import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';

// Material UI
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
// Local
import Avatar from '../Avatar';
import TextLink from '../TextLink';

import { route } from '../../constants';
import useStyles from './styles';

const PostHeader = ({ post, repost, }) => {
  const classes = useStyles();
  dayjs.extend(relativeTime);

  return (
    <div className={classes.header}>
      {repost
        && (


          <Avatar
            className={classes.headerAvatar}
            size={30}
            user={post.author}
          />
        )}
      <TextLink
        bold
        className={classes.headerItem}
        to={route.profilePosts(post.author.slug)}
      >
        {post.author.display_name.charAt(0).toUpperCase()+post.author.display_name.slice(1)}
      </TextLink>

      {post.parent
        && (

          <Typography className={classes.headerItem} style={{marginLeft:"1%",fontSize:15}} color="textSecondary">
             shared a post
          </Typography>


        )}

      <Typography className={classes.headerTime} color="textSecondary">
        {'  '} {dayjs(post.created_at).fromNow()}
      </Typography>
  
    </div>
  );
};

PostHeader.defaultProps = {
  repost: false,
};

PostHeader.propTypes = {
  repost: PropTypes.bool,
  post: PropTypes.shape({
    author: PropTypes.shape({
      display_name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
 //TODO:ADD tab on home header
 //add payment,location,due date