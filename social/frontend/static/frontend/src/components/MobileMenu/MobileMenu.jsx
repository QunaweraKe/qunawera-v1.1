import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import ListIcon from '@material-ui/icons/List';
import NOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Local
import Avatar from '../Avatar';

import EditProfile from '../EditProfile';
import { APP_NAME, route } from '../../constants';

import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { logoutUser, selectUser } from '../../redux/user';

import useStyles from './styles';

const MobileMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const unreadNotificationsCount =  useSelector(selectUnreadNotificationsCount);
  const user = useSelector(selectUser);


  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <IconButton
       className={classes.buttonAvatar}

        onClick={handleToggleDrawer}

      >
        <MenuIcon/>
      </IconButton>

      <Drawer
        anchor="top"
        className={classes.drawer}
        open={drawerOpen}
        onClose={handleToggleDrawer}
      >
        <div className={classes.titleContainer}>
          <Typography
            className={classes.title}
            variant="h6"
            color="primary"

          >
            {APP_NAME}
          </Typography>
          <IconButton
            color="primary"
            onClick={handleToggleDrawer}
            size="small"
          >
            <CancelIcon />
          </IconButton>
        </div>
        <div className={classes.userInfoContainer}>
        <Card  >
        <CardContent>
          <Avatar
            className={classes.avatar}
            size={35}
            user={user}
          />
          <Grid container spacing={7}>
           <Grid item>

          <Typography variant="subtitle1">
           {user.display_name}  &#183;
          </Typography>
           </Grid>
            <Grid item>
          <EditProfile />
           </Grid>
           </Grid>

        </CardContent>
         </Card>
        </div>

 <Card  style={{ boxShadow: '2px 2px 2px 2px  rgba(0,0,0,.2)'}}>
        <CardContent>
        <List className={classes.list}>
          <ListItem
            component={Link}
            button
            to={route.home}
          >
            <ListItemIcon>
              <ListIcon/>
            </ListItemIcon>
            <ListItemText primary="Feed" />
          </ListItem>
          <Divider variant="middle"  light/>
          <ListItem
            component={Link}
            button
            to={route.profilePosts(user.slug)}
          >
            <ListItemIcon>
              <PersonOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

                    <Divider light variant="middle"/>
          <ListItem
            component={Link}
            button
            to={route.notifications}
          >
            <ListItemIcon>
              <Badge
                badgeContent={unreadNotificationsCount}
                color="primary"
              >
                <NOutlinedIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Activities" />
          </ListItem>
          <Divider  light variant="middle"/>
          <ListItem
            component={Link}
            button
            to={route.settings}
          >
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
                    <Divider  light variant="middle"/>
          <ListItem
            className={classes.logout}
            button
            onClick={handleLogout}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>

        </List>
        </CardContent>
        </Card>
      </Drawer>
    </>
  );
};

export default MobileMenu;
 //TODO MAKE A CONTACT US PAGE
 //TODO :grid for all the items in mobile menu -rm list