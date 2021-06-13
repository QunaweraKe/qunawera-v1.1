import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';

// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';

import useUI from '../../hooks/useUI';

import { createPost, key } from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogPostForm = () => {


  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [postText, setPostText] = React.useState('');

  const { loading } = useUI(key.post, null, false);

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(createPost(user.username, postText));
    setPostText('');
    handleClose();
  };

  return (
    <>
      <div >
         <Tooltip title="post" arrow disableFocusListener>
       <IconButton color="primary"
       size="small"
        aria-label="add"
          id="header-post-button"
          onClick={handleOpen}
          variant="outlined">
           <AddIcon />
      </IconButton>
         </Tooltip>

      </div>
      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={handleClose}
         TransitionComponent={Transition}
      >

        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography variant="h6">
            Post Task
          </Typography>
        </DialogTitle>
        <DialogContent
          className={classes.contentContainer}
          dividers
        >
          <div className={classes.avatarContainer}>
            <Avatar user={user} />
          </div>
          <div className={classes.inputContainer}>
            <InputBase
              className={classes.input}
              fullWidth
              multiline
              onChange={handleChange}
              placeholder="What would you like to post today?"
              rowsMax={5}
              spellCheck
              value={postText}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            size="small"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={loading || postText.trim().length === 0}
            onClick={handleSubmit}
            variant="outlined"
            size="small"
          >
            Post
            {loading && <CircularProgress />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogPostForm;
