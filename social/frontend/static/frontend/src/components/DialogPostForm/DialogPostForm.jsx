import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';


// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';

import useUI from '../../hooks/useUI';

import { createPost, key } from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';
//functions
const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.6)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogPostForm = () => {


  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  

  const { loading } = useUI(key.post, null, false);
  
  const [formData, setFormData] = React.useState({
    body: '',
    payment: '',
   

  });

 
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(formData));
    setFormData('');
    handleClose();
  };

  


  return (
    <>
      <div >
         <CustomTooltip title="create a new task listing" arrow disableFocusListener>
       <Button color="primary"
       size="small"
        aria-label="add"
          id="header-post-button"
          onClick={handleOpen}
          variant="outlined">
          Post <AddIcon />
      </Button>
         </CustomTooltip>
      </div>
      <Dialog
      fullScreen
        open={dialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}

      >
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography
            className={classes.title}
            variant="h6"
          >
            New task
          </Typography>
     
        </DialogTitle>
        <DialogContent>
        <div className={classes.avatarContainer}>
            <Avatar user={user} />
          </div>
          <TextField
          className={classes.inputContainer}
            autoComplete="off"
            multiline
            fullWidth
            id="body"
            label="Task Description"
            name="body"
            onChange={handleChange}
            type="text"
            value={formData.body}
            variant="outlined"
            rows={4}
          />
          <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Payment</InputLabel>
          <OutlinedInput
            
            autoComplete="off"
            className={classes.formField}
            id="payment"
            name="payment"
            onChange={handleChange}
            type="text"
            value={formData.payment}
            startAdornment={<InputAdornment position="start">Ksh.</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
         
         
             <Button
            className={classes.margin}
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            size="large"
            variant="outlined"
            
          >
              Submit
            {loading && <CircularProgress />}
          </Button>
          <Button
            className={classes.margin}
            color="secondary"
            disabled={loading}
            onClick={handleClose}
            size="large"
            variant="outlined"
            
          >
            Cancel
            
          </Button>
        </DialogContent>
          
      </Dialog>
    </>
  );
};

export default DialogPostForm;
