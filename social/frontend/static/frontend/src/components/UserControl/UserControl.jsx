import React from 'react';
import { useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';

// Local
import Avatar from '../Avatar';

import Logout from '../Logout';

import { selectUser } from '../../redux/user';

import { truncate } from '../../utils';

import useStyles from './styles';

const UserControl = () => {
  const classes = useStyles();

  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        onClick={handleMenuOpen}
        size="small"
      >
        <Avatar
          linkable={false}
          size={40}
          user={user}
        />
        <div className={classes.container}>
          <div className={classes.userAndSlug}>
            <Typography className={`${classes.displayName} ${classes.text}`}>
              {truncate(user.display_name.charAt(0).toUpperCase()+user.display_name.slice(1), 16)}
            </Typography>

          </div>
          <MoreHorizSharpIcon className={classes.icon} />
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
        classes={{ list: classes.muiMenuList }}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
      >
        <div className={classes.menuHeader}>
          <Avatar
            size={40}
            user={user}
          />
          <div className={classes.userAndSlug}>
            <Typography className={`${classes.displayName} ${classes.text}`}>
             Hey, {user.display_name.charAt(0).toUpperCase()+user.display_name.slice(1)} are you sure you want to logout?
            </Typography>

          </div>
        </div>
        <Logout handleMenuClose={handleMenuClose} />
      </Menu>
    </>
  );
};

export default UserControl;