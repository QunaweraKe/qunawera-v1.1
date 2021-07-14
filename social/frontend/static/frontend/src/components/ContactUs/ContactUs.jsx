
import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
//local import
import { createContactUs, key } from '../../redux/user';
import { APP_NAME} from '../../constants';

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
   

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createContactUs(formData));
    setFormData('');
    handleClose();
  };
  return (
   <div>
     <Tooltip title="Contact Us" arrow  placement="bottom">
      <Button color="secondary" onClick={handleClickOpen} size="small">
         <span style={{fontSize:"12px",fontWeight:"bolder"}}>Help</span><ContactSupportIcon />
      </Button>
      </Tooltip>

      <Dialog open={open}  fullWidth onClose={handleClose} aria-labelled by="form-dialog-title">
        <DialogTitle style={{fontSize:"25px",marginBottom:"20px",marginTop:"20px",fontWeight:"bold"}} id="form-dialog-title">{APP_NAME} Support</DialogTitle>

        <Divider style={{marginBottom:"10px"}}/>
          
        <DialogContent>

          <DialogContentText>
            Thank you for reaching out to us.Let us know how we can help you and we will get back to you almost immediately.
            Fill in the fields below.
          </DialogContentText>

          <TextField
           name="email"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange}
            type="email"
            variant="outlined"
             value={formData.email}
          />
             <TextField
             variant="outlined"
             multiline
            margin="dense"
            id="description"
            label="Description"
            onChange={handleChange}
            type="text"
            value={formData.description}
            fullWidth
            name="description"
          />

          <Button    onClick={handleSubmit} color="primary" variant="outlined" size="small">
            Submit
          </Button>
        
          <Button onClick={handleClose} color="textSecondary" variant="outlined"size="small">
            Cancel
          </Button>
        
        
          </DialogContent>
      </Dialog>

    </div>
  );
};


export default ContactUs;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked