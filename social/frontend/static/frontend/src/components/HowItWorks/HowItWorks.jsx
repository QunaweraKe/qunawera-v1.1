
import React from 'react';

import { APP_NAME } from '../../constants';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const HowItWorks = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
   <div>
    <Button color="secondary" onClick={handleClickOpen('paper')} size="small" >
         How It Works
      </Button>

     <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
    fullWidth
     maxWidth="md"
      >
        <DialogTitle style={{fontSize:"25px",marginBottom:"20px",marginTop:"20px",fontWeight:"bold"}}>{APP_NAME}:How It Works</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText

            ref={descriptionElementRef}

          >
          Feel free to contact us for any queries.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="secondary" fullWidth variant="outlined" size="small" style={{fontWeight:"bold"}}>
           I have Read and Understood how it works
         </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};


export default HowItWorks;
