import {  makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {useDispatch } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import LogoutIcon from '@material-ui/icons/ExitToApp';


//local
import { selectUser, logoutUser } from '../../redux/user';

//Function to slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  navButtonText: {
    display: 'none',


    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const LogOut = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
  
         
      <Button startIcon={<LogoutIcon/>} size="small" color="secondary" onClick={handleClickOpen}>
      <span className="nav-button-text">Logout</span>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"variant="h2">{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
           Cancel
          </Button>
         
          <Button
              size="small"
              
              onClick={handleLogout}
            >
              <span className="nav-button-text">Agree</span>
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );


}

;


export default LogOut;
