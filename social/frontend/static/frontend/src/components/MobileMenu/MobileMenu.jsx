// Material UI
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
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
import Box from '@material-ui/core/Box';
// Local
import PageTitle from '../PageTitle';
import Avatar from '../Avatar';
import LogOut from '../LogOut';
import useStyles from './styles';
import DeviceDetection from '../DeviceDetection';


const MobileMenu = () => {
  const classes = useStyles();
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
        anchor="bottom"
        openSecondary={true}
        docked={true} 
        open={drawerOpen}
        onClose={handleToggleDrawer}
       
      >
        <div className={classes.titleContainer}>
        <PageTitle title="mobile" />
        <Box position="absolute" top={1} right={2}>

        <IconButton
            color="primary"
            onClick={handleToggleDrawer}
            size="small"
          >
            <CancelIcon />
          </IconButton>

            </Box>
         
          <Typography variant="h6" color="primary" style={{ fontWeight: "bold", marginLeft: ".5vw" }} >
            {APP_NAME}
          </Typography>
        </div>
        <div className={classes.userInfoContainer}>
        <Card  >
        <CardContent>
          <Avatar
            className={classes.avatar}
            size={70}
            user={user}
          />
         

          <Typography variant="subtitle1">
           {user.display_name}  
          </Typography>
           

        </CardContent>
         </Card>
        </div>
<Divider/>
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
          <Divider/>
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
     <DeviceDetection/>
     <Link to={route.team}> 
        <Typography align="left" style={{fontFamily:"monospace",fontSize:"10px"}}>
           Learn more about us.
        </Typography>
        </Link>
        
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