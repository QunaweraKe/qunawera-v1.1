import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// Material UI
import Divider from '@material-ui/core/Divider';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NIcon from '@material-ui/icons/Notifications';
import NOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ListIcon from '@material-ui/icons/List';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SearchIcon from '@material-ui/icons/Search';



// Local
import DeviceDetection from '../DeviceDetection';
import LogOut from '../LogOut';
import { APP_NAME, route } from '../../constants';
import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { selectUser } from '../../redux/user';
import useStyles from './styles';

const Header = () => {

  const classes = useStyles();
  const location = useLocation();
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);
  const user = useSelector(selectUser);

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
              fullWidth
              color={active(route.home) ? 'primary' : 'secondary.main'}
              component={Link}
              size="large"
              startIcon={
                active(route.home)
                  ? <ListAltOutlinedIcon />
                  : <ListIcon />
              }
              to={route.home}
            >
              <span className="nav-button-text">Feeds</span>
            </Button>
          </ListItem>
          <ListItem disableGutters>
            <Button
              fullWidth
              color={
                active(route.profilePosts(user.slug)) ? 'primary' : 'secondary.main'}
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
              fullWidth
              color={active(route.settings) ? 'primary' : 'secondary.main'}
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
              fullWidth
              color={active(route.searchposts) ? 'primary' : 'default'}
              component={Link}
              size="large"
              startIcon={<SearchIcon />}
              to={route.searchposts}
            >
              <span className="nav-button-text">Search</span>
            </Button>
          </ListItem>
        </List>

        <Divider />
        <List
          className={classes.navList}
          component="nav"

        >
          <ListItem disableGutters>
            <Button
              fullWidth
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
              fullWidth
              color={active(route.recommendedPosts) ? 'primary' : 'default'}
              component={Link}
              size="large"
              startIcon={<EmojiObjectsIcon />}
              to={route.recommendedPosts}
            >
              <span className="nav-button-text">Recommended</span>
            </Button>
          </ListItem>


          <ListItem disableGutters>
            <Button
              fullWidth
              color={active(route.contactUs) ? 'primary' : 'default'}
              component={Link}
              size="large"
              startIcon={<ContactSupportIcon />}
              to={route.contactUs}>
              <span className="nav-button-text">Help</span>
            </Button>
          </ListItem>


        </List>
        <Divider />
        <List
          className={classes.navList}
          component="nav"

        >
          <ListItem disableGutters>
            <LogOut className={classes.headerContainer} />
          </ListItem>
        </List>
        <div style={{ marginLeft: '10%', marginTop: "20%" }}>

          <Typography color="textSecondary" style={{ fontSize: ".8em" }}>
            {'© '}
            {new Date().getFullYear()}
            {'  '}

            {APP_NAME} {' ,'} LLC .


          </Typography>
          <DeviceDetection />
          &middot;
          <Typography color="textSecondary" style={{ fontSize: ".8em" }}>
           feedback



          </Typography>

        </div>
      </div>

    </div>
  );
};

export default Header;
//Add carousel to first time engagement
