import PropTypes from 'prop-types';
import React from 'react';
import {Link } from 'react-router-dom';
// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

// Local
import PostHeader from '../PostHeader';
import { route } from '../../constants';
import useStyles from './styles';

const PostParent = ({ className, post }) => {
  const classes = useStyles();

  return (
    <Paper
      classes={{ root: classes.parentContainer }}
      className={className}
      elevation={0}
    >


      <PostHeader
        post={post}
        repost
      />
    <Link to={route.postDetail(post.id)} className={classes.Link} >
    <Typography color="textSecondary" className={classes.title}>
                      {post.title}

                    </Typography >
      <Typography style={{ marginLeft:"3px",fontSize: "12px", letterSpacing: '1px' }}>
        {post.body}
      </Typography>
      {post.image
                  && (
      <CardMedia
                  className={classes.media}
                      image={post.image}

                />
                  )}
      </Link>
    </Paper>
  );
};

PostParent.defaultProps = {
  className: null,
};

PostParent.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostParent;
