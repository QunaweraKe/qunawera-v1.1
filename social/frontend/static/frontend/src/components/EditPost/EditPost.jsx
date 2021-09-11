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
import Container from '@material-ui/core/Container';


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
        className={classes.menuItem}
      >
        <ListItemIcon>
         <BorderColorIcon/>
        </ListItemIcon>
        <ListItemText primary="Edit " 
         classes={{primary:classes.listItem}}/>
      </MenuItem>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={handleExited}
        fullScreen
      >
        <Container maxWidth="md">
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography variant="h6">
            Edit
          </Typography>
        </DialogTitle>
        <br/>
        <DialogContent >
         
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
            variant="outlined"
           rows={10}
            

          />
          

          
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            size="small"
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={loading || body.trim().length === 0}
            onClick={handleEdit}
            variant="contained"
            size="small"
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            Save
            {loading && <CircularProgress />}
          </Button>
        </DialogActions>
        </Container>
      </Dialog>
    </>
  );
});

EditPost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
};

export default EditPost;
