import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
//local
import { logoutUser } from '../../redux/user';
import { APP_NAME } from '../../constants';

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



      <Button startIcon={<LogoutIcon />} size="small" onClick={handleClickOpen}>
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

        <DialogContent
        >
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="subtitle1" style={{ fontWeight: "bolder" }} color="black">Are you sure you want to log out of {APP_NAME}{"?"}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" size="small" variant="outlined">
            Cancel
          </Button>
          <Divider orientation="vertical" />
          <Button
            size="small"
            color="primary"
            onClick={handleLogout}
            variant="outlined"
          >
            <span className="nav-button-text">Yes,Logout</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );


}

  ;


export default LogOut;
