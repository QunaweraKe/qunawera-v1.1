// Material UI
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import NOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_NAME, route } from '../../constants';
import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { selectUser } from '../../redux/user';
// Local
import PageTitle from '../PageTitle';
import Avatar from '../Avatar';
import LogOut from '../LogOut';
import useStyles from './styles';



const MobileMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const unreadNotificationsCount =  useSelector(selectUnreadNotificationsCount);
  const user = useSelector(selectUser);


  const [drawerOpen, setDrawerOpen] = React.useState(false);


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
        anchor="left"
        className={classes.drawer}
        open={drawerOpen}
        onClose={handleToggleDrawer}
       
      >
        <div className={classes.titleContainer}>
        <PageTitle title="mobile" />
          <IconButton
            color="primary"
            onClick={handleToggleDrawer}
            size="small"
          >
            <CancelIcon />
          </IconButton>
          <Typography variant="h6" color="primary" style={{ fontWeight: "bold", marginLeft: ".5vw" }} >
            {APP_NAME}
          </Typography>
        </div>
        <div className={classes.userInfoContainer}>
        <Card  >
        <CardContent>
          <Avatar
            className={classes.avatar}
            size={50}
            user={user}
          />
          <Grid container spacing={7}>
           <Grid item>

          <Typography variant="subtitle1">
           {user.display_name}  
          </Typography>
           </Grid>
           </Grid>

        </CardContent>
         </Card>
        </div>

 <Card square >
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
        
          <div className={classes.logout}>
              <LogOut/>
              </div>
           
        
              <div style={{ marginLeft: '20%',marginTop:"20%" }}>
      
          
      <Typography className={classes.footer} color="textSecondary" style={{ fontSize: ".8em" }}>
       {'© '}
       {new Date().getFullYear()}
       {'  '}
     
       {APP_NAME} {' ,'} LLC .All rights reserved.
     
     
     </Typography>
     
        
       </div>
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