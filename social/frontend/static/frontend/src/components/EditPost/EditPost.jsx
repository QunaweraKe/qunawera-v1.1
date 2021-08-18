import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';



// Local
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import { editPost, key, selectPost } from '../../redux/post';




const EditPost = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { postId, setAnchorEl } = props;
  const dispatch = useDispatch();

  const originalBody = useSelector((s) => selectPost((s), postId)).body;
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [body, setBody] = React.useState(originalBody);

  const { loading } = useUI(key.editPost, null, false);

  const handleChange = (event) => {
    setBody(event.target.value);
    
  };
  
  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleEntered = () => {
    setAnchorEl(null);
  };

  const handleEdit = async () => {
  
      await dispatch(editPost(postId,body));
      
    handleClose();
  };

  const handleExited = () => {
    setBody(originalBody);
  
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <MenuItem
        onClick={handleOpen}
        ref={ref}
      >
        <ListItemIcon>
         <BorderColorIcon/>
        </ListItemIcon>
        <ListItemText primary="Edit Post" 
         classes={{primary:classes.listItem}}/>
      </MenuItem>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={handleExited}
        fullScreen
      >
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography variant="h6">
            Edit post
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
         
           <TextField
            required
            className={classes.inputContainer}
            autoComplete="off"
            multiline
            fullWidth
            id="body"
            label="Description"
            name="body"
            onChange={handleChange}
            type="text"
            value={body}
            variant="filled"
            rows={4}
            

          />
          

          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            size="small"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={loading || body.trim().length === 0}
            onClick={handleEdit}
            variant="outlined"
             size="small"
          >
            Save
            {loading && <CircularProgress />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

EditPost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
};

export default EditPost;
