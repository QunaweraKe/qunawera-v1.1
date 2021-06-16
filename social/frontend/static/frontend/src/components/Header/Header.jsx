import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// Material UI
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NIcon from '@material-ui/icons/Notifications';
import NOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {sizing} from '@material-ui/system';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ListIcon from '@material-ui/icons/List';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SearchIcon from '@material-ui/icons/Search';

// Local
import Footer from '../Footer';
import { route } from '../../constants';
import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { selectUser, logoutUser } from '../../redux/user';
import useStyles from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const active = (pathname) => location.pathname === pathname;

  return (
    <div className={classes.headerContainer}>
      <div className={classes.pushContainer}>


        <List
          className={classes.navList}
          component="nav"

        >
          <ListItem disableGutters>
            <Button
              color={active(route.home) ? 'primary': 'secondary.main' }
              component={Link}
              size="large"
              startIcon={
                active(route.home)
                  ?<ListAltOutlinedIcon  />
                  :  <ListIcon/>
              }
              to={route.home}
            >
              <span className="nav-button-text">Feed</span>
            </Button>
          </ListItem>
          <ListItem disableGutters>
            <Button
              color={
                active(route.profilePosts(user.slug))  ? 'primary' : 'secondary.main' }
              component={Link}
              size="large"
              startIcon={
                active(route.profilePosts(user.slug))
                  ? <AccountCircleIcon />
                  : <AccountCircleOutlinedIcon />
              }
              to={route.profilePosts(user.slug)}
            >
              <span className="nav-button-text">Profile</span>
            </Button>
          </ListItem>


          <ListItem disableGutters>
            <Button
              color={active(route.settings) ?  'primary' : 'secondary.main'}
              component={Link}
              size="large"
              startIcon={
                active(route.settings)
                  ? <SettingsIcon />
                  : <SettingsOutlinedIcon />
              }
              to={route.settings}
            >
              <span className="nav-button-text">Settings</span>
            </Button>
          </ListItem>
           <ListItem disableGutters>
            <Button
              color={active(route.search) ? 'primary' : 'default'}
              component={Link}
              size="large"
              startIcon={<SearchIcon />}
              to={route.search}
            >
              <span className="nav-button-text">Search</span>
            </Button>
          </ListItem>
        </List>
           <Divider light/>

             <List
          className={classes.navList}
          component="nav"

        >
          <ListItem disableGutters>
           <Button
              color={active(route.notifications) ? 'primary' : 'default'}
              component={Link}
              startIcon={(
                <Badge
                  badgeContent={unreadNotificationsCount}
                  color="primary"
                >
                  {active(route.notifications)
                    ? <NIcon />
                    : <NOutlinedIcon />}
                </Badge>
              )}
              size="large"
              to={route.notifications}
            >
              <span className="nav-button-text">Activities</span>
            </Button>
          </ListItem>
          <ListItem disableGutters>
            <Button
              color={
                active(route.profilePosts(user.slug))  ? 'primary' : 'secondary.main' }
              component={Link}
              size="large"
              startIcon={
                active(route.profilePosts(user.slug))
                  ? <AccountCircleIcon />
                  : <AccountCircleOutlinedIcon />
              }
              to={route.profilePosts(user.slug)}
            >
              <span className="nav-button-text">Your Posts</span>
            </Button>
          </ListItem>


          <ListItem disableGutters>
            <Button
              color={active(route.settings) ?  'primary' : 'secondary.main'}
              component={Link}
              size="large"
              startIcon={
                active(route.settings)
                  ? <ThumbUpIcon />
                  : <ThumbUpOutlinedIcon />
              }
              to={route.settings}
            >
              <span className="nav-button-text">Liked Posts</span>
            </Button>
          </ListItem>
          
           <ListItem disableGutters>
            <Button
              color={active(route.recommendedPosts) ? 'primary' : 'default'}
              component={Link}
              size="large"
              startIcon={<EmojiObjectsIcon/>}
              to={route.recommendedPosts}
            >
              <span className="nav-button-text">Recommended</span>
            </Button>
          </ListItem>
        </List>
 <Divider light/>
 <List>
    <ListItem disableGutters>
            <Button
              size="large"
              startIcon={<LogoutIcon/>}
              onClick={handleLogout}
            >
              <span className="nav-button-text">Logout</span>
            </Button>
          </ListItem>
         
 </List>
 <Divider light/>
  <Footer/>
      </div>

    </div>
  );
};

export default Header;

//TODO:Add activity  feed to replace home
//TOD0:implement LOGOUT
