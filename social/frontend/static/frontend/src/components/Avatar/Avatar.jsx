import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import MuiAvatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
// Local
import { route } from '../../constants';

import useStyles from './styles';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'orange',
    color: 'orange',
    boxShadow: `0 0 0 2px ${theme.palette.grey[50]}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 3s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: .5,
    },
  },
}))(Badge);

const Avatar = ({
  className,
  linkable,
  size,
  user,
  ...rest
}) => {
  const classes = useStyles(size);

  return (linkable
    ? (
      <StyledBadge
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot"
    >
      <MuiAvatar
        alt={user.display_name}
        classes={{ root: classes.root }}
        className={className}
        component={Link}
        src={user.profile.image}
        to={route.profilePosts(user.slug)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
       </StyledBadge>
    ) : (

      <StyledBadge
      overlap="circular"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      variant="dot"
    >
      <MuiAvatar
        alt={user.display_name}
        classes={{ root: classes.root }}
        className={className}
        src={user.profile.image}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
     </StyledBadge>
    )
  );
};

Avatar.defaultProps = {
  className: null,
  linkable: true,
  size: 40,
};

Avatar.propTypes = {
  className: PropTypes.string,
  linkable: PropTypes.bool,
  size: PropTypes.number,
  user: PropTypes.shape({
    display_name: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      image: PropTypes.string,
    }).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;