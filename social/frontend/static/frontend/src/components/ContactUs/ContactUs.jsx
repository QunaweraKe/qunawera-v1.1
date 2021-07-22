
import React from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Divider, Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Slide from '@material-ui/core/Slide';
//local import
import { createContactUs, key } from '../../redux/user';
import { APP_NAME} from '../../constants';
//Function to slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



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
     <Tooltip title="Reach Us" arrow  placement="bottom">
      <Button color="secondary" onClick={handleClickOpen} size="small">
         <span style={{fontSize:"12px",fontWeight:"bolder"}}>Help</span><ContactSupportIcon />
      </Button>
      </Tooltip>

      <Dialog open={open} maxWidth="md" onClose={handleClose} TransitionComponent={Transition} aria-labelled by="form-dialog-title">
        <DialogTitle style={{fontSize:"25px",marginBottom:"10px",marginTop:"0px",fontWeight:"bold"}} id="form-dialog-title">{APP_NAME} Support</DialogTitle>

        <Paper style={{padding:'0px',width:"100%",backgroundColor:"textSecondary"}}  elevation={1}>
          
        <DialogContent>

          <DialogContentText>
             Thank you for reaching out to us.
            Please fill in all the fields below.
          </DialogContentText>

          <TextField
           name="email"
            color="textSecondary"
            id="email"
            label="Email Address"
            type="email"
          
            onChange={handleChange}
            type="email"
            variant="filled"
             value={formData.email}
             fullWidth
          />
             <TextField
             style={{marginTop:"10px"}}
             variant="filled"
             multiline
            rows={6}
            id="description"
            label="Description"
            onChange={handleChange}
            type="text"
            value={formData.description}
            fullWidth
            name="description"
          />
            <Divider orientation="horizontal " light variant='inset' />
  
          <Button  style={{marginTop:"10px"}}  onClick={handleSubmit} color="primary" variant="outlined" >
            Send
          </Button>
      
          <Button  style={{marginTop:"10px",marginLeft:"4px"}} onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
        
        
          </DialogContent>
          </Paper>
      </Dialog>

    </div>
  );
};


export default ContactUs;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked