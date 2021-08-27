import PropTypes from 'prop-types';
import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Local
import TextLink from '../TextLink';

import { route } from '../../constants';

import useStyles from './styles';

const NotificationType = ({ notification }) => {
  const classes = useStyles();

  return (
    <>
      {notification.type === 1 && (
        <>
        <Typography>
          {notification.from_user.display_name}
          {' '}
          recommended your
          {' '}
          <TextLink to={route.postDetail(notification.post.id)}>
            post
          </TextLink>
        </Typography>
          <Typography className={classes.postBody} color="textSecondary">
     
          {notification.post.body.length > 80 ?
                    `${notification.post.body.substring(0, 30)}...` : notification.post.body
                  }
        </Typography>
        <Divider/>
        </>
      )}
      {notification.type === 2 && (
        <>
        <Typography>
          {notification.from_user.display_name}
          {' '}
          liked your
          {' '}
          <TextLink to={route.postDetail(notification.post.id)}>
            post
          </TextLink>
        </Typography>
        <Typography className={classes.postBody} color="textSecondary">
        {notification.post.body.length > 80 ?
                    `${notification.post.body.substring(0, 30)}...` : notification.post.body
                  }
      </Typography>
      <Divider/>
      </>
      )}
      {notification.type === 3 && (
        <>
          <Typography>
            {notification.from_user.display_name}
            {' '}
            reviewed  your
            {' '}
            <TextLink  className={classes.post} to={route.postDetail(notification.post.id)}>
              post
            </TextLink>
            
          </Typography>
          <Typography className={classes.postBody} color="textSecondary">
          {notification.post.body.length > 80 ?
                    `${notification.post.body.substring(0, 30)}...` : notification.post.body
                  }
          </Typography>
          <Divider/>
        </>
      )}
      {notification.type === 4 && (
        <Typography>
          {notification.from_user.display_name}
          {' '}
        started following your activities.
        </Typography>
      )}
    </>
  );
};

NotificationType.propTypes = {
  notification: PropTypes.shape({
    from_user: PropTypes.shape({
      display_name: PropTypes.string.isRequired,
    }).isRequired,
    post: PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
    }),
    type: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  }).isRequired,
};

export default NotificationType;
