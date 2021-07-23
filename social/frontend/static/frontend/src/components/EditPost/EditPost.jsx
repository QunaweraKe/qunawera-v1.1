import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';



// Local
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';

import useUI from '../../hooks/useUI';

import { editPost, key, selectPost } from '../../redux/post';

const EditPost = React.forwardRef((props, ref) => {
  const { postId, setAnchorEl } = props;
  const dispatch = useDispatch();

  const originalBody = useSelector((s) => selectPost((s), postId)).body;
  const originalSkillset = useSelector((s) => selectPost((s), postId)).skillset;
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [body, setBody] = React.useState(originalBody);
  const [skillset, setSkillset] = React.useState(originalSkillset);
  const { loading } = useUI(key.editPost, null, false);

  const handleChange = (event) => {
    setBody(event.target.value);
    
  };
  const handleChangeskill = (event) => {
    setSkillset(event.target.value);
    
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleEntered = () => {
    setAnchorEl(null);
  };

  const handleEdit = async () => {
    if (body !== originalBody) {
      await dispatch(editPost(postId, body));
    }
    if (skillset !== originalSkillset) {
      await dispatch(editPost(postId, skillset));
    }
    handleClose();
  };

  const handleExited = () => {
    setBody(originalBody);
    setSkillset(originalSkillset);
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
         
        </ListItemIcon>
        <ListItemText primary="Edit Post" style={{color:"primary"}}/>
      </MenuItem>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={handleExited}
      >
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography variant="h6">
            Edit post
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <InputBase
            fullWidth
            multiline
            onChange={handleChange}
            placeholder="Which task do you have in mind?"
            rowsMax={5}
            spellCheck
            value={body}
          />
          <InputBase
            fullWidth
            multiline
            onChange={handleChangeskill}
            placeholder="Which task do you have in mind?"
            rowsMax={5}
            spellCheck
            value={skillset}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
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
