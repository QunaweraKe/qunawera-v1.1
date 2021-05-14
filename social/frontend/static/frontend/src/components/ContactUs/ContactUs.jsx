
import React from 'react';


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
import { APP_NAME} from '../../constants';
import IndexImage from '../../components/Files/Images/Cupid.svg';
const ContactUs = ({ children }) => {
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
   <div>
      <Button  color="secondary" onClick={handleClickOpen} size="small">
        Contact Us
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact {APP_NAME} Team</DialogTitle>

        <Divider style={{marginBottom:"40px"}}/>
        <DialogContent>
          <DialogContentText>
            Thank you for reaching out to us.Let us know how we can help you and we will get back to you almost immediately.
            Fill in the fields below.
          </DialogContentText>
          <TextField

            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
             <TextField
          multiline
          rows={3}
            margin="dense"
            id="name"
            label="Reason for contacting us"

            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="textSecondary" variant="outlined"size="small">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined" size="small">
            Send
          </Button>
          <IndexImage style={{width:"200px",height:"200px",marginLeft:"40px"}} />
        </DialogActions>
      </Dialog>
    </div>
  );
};


export default ContactUs;
