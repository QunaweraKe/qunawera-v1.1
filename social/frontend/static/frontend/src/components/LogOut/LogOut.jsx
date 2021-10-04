
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

//local
import { logoutUser } from '../../redux/user';
import { APP_NAME } from '../../constants';

//Function to slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


const LogOut = () => {
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



      <Button   color="primary"   onClick={handleClickOpen}>
      <LogoutIcon /> <span className="nav-button-text">Logout</span>
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
          <Button onClick={handleClose}     color="textSecondary" size="small" variant="outlined"
                  style={{boxShadow:"none",borderRadius:"5px",}}>
            Cancel
          </Button>
          
          <Button
            size="small"
            color="primary"
            onClick={handleLogout}
            variant="contained"
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            <span className="nav-button-text">Yes</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );


}

  ;


export default LogOut;
