
import React from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors/red';
//local
import { removeAccount } from '../../redux/user';
import { APP_NAME } from '../../constants';

//Function to slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleRemove = () => {
    dispatch(removeAccount());
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>



      <Button variant="outlined" fullwidth  color="primary"  style={{boxShadow:"none",borderRadius:"5px",}} onClick={handleClickOpen}>
        <span className="nav-button-text">Delete  Account</span>
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
            <Typography variant="subtitle1" style={{ fontWeight: "bolder" ,color:"red"}} >If you decide to delete your {APP_NAME}  account you will lose your profile and all related activities.This action cannot be undone.Are you sure you want to do this{"?"}</Typography>
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
            onClick={handleRemove}
            variant="contained"
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            <span className="nav-button-text">Yes,I Agree</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );


}

  ;


export default DeleteAccount;
