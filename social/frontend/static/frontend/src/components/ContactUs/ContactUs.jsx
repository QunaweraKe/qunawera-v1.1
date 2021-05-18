
import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
//local import
import { createContactUs, key } from '../../redux/user';
import { APP_NAME} from '../../constants';
import IndexImage from '../../components/Files/Images/Cupid.svg';
const ContactUs = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    description:'',

  });

  const handleClickOpen = () => {
    setOpen(true);
  };
   const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createContactUs(formData));
  };

  const handleChange = (event) => {
     setFormData(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
   <div>
      <Button  color="secondary" onClick={handleClickOpen} size="small">
        Contact Us
      </Button>
      <Dialog open={open}  fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle style={{fontSize:"25px",marginBottom:"20px",marginTop:"20px",fontWeight:"bold"}} id="form-dialog-title">Contact {APP_NAME} Support</DialogTitle>

        <Divider style={{marginBottom:"10px"}}/>
           <form  onSubmit={handleSubmit}>
        <DialogContent>

          <DialogContentText>
            Thank you for reaching out to us.Let us know how we can help you and we will get back to you almost immediately.
            Fill in the fields below.
          </DialogContentText>

          <TextField

            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange}
            type="email"
             value={formData.email}
          />
             <TextField
             multiline
            margin="dense"
            id="description"
            label="How can we help you"
                onChange={handleChange}
                type="text"
                value={formData.description}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="textSecondary" variant="outlined"size="small">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="outlined" size="small">
            Submit
          </Button>
          <IndexImage style={{width:"250px",height:"200px",marginLeft:"40px",marginBottom:"20px"}} />
        </DialogActions>
         </form>
      </Dialog>

    </div>
  );
};


export default ContactUs;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked