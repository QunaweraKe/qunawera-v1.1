
import React from 'react';


// MATERIAL UI
import {Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Slide from '@material-ui/core/Slide';
//local import
import { APP_NAME} from '../../constants';
//Function to slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



const Locations = () => {

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
   

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
   <div>
     <Tooltip title="Where we are" arrow  placement="bottom">
      <Button color="secondary" onClick={handleClickOpen} size="small">
         <span style={{fontSize:"12px",fontWeight:"bolder"}}>Location</span>
      </Button>
      </Tooltip>

      <Dialog square open={open} maxWidth="md" onClose={handleClose} TransitionComponent={Transition} aria-labelled by="form-dialog-title">
        <DialogTitle style={{fontSize:"25px",marginBottom:"10px",marginTop:"0px",fontWeight:"bold"}} id="form-dialog-title">{APP_NAME} Location</DialogTitle>


          
        <DialogContent>
        Visit Our offices  &middot;
          </DialogContent>
      
      </Dialog>

    </div>
  );
};


export default Locations;