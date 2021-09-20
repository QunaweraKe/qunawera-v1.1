import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
//Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShareIcon from '@material-ui/icons/Share';
import Container from '@material-ui/core/Container';
// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';
import PostParent from '../PostParent';
import useStyles from './styles';
import useUI from '../../hooks/useUI';
import { createRepost, key, selectPost } from '../../redux/post';
import { selectUser } from '../../redux/user';






const Repost = ({ postId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);

  let paramPostId = postId;
  let post;
  post = useSelector((s) => selectPost(s, paramPostId));
  if (post.parent) {
    post = post.parent;
    paramPostId = post.id;
  }
  const user = useSelector(selectUser);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [body, setBody] = React.useState('');

  const { loading } = useUI(key.repost(post.id), null, false);

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setBody('');
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(createRepost(user.username, body, paramPostId));
    handleClose();
  };

  return (
    <>

  

               <MenuItem

onClick={handleOpen}

> 
<ListItemIcon>
<ShareIcon />
 </ListItemIcon>
 
</MenuItem>

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        fullScreen
  
      >
         <Container maxWidth="sm">
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          
        </DialogTitle>
        <DialogContent
        
          className={classes.postContainer}

        >  
          <div className={classes.avatarContainer}>
            <Avatar user={user} />
          </div>
          <div className={classes.contentContainer}>
          
          <PostParent post={post} />
          <InputBase
              classes={{
                root: classes.inputRoot,
              }}
              fullWidth
              multiline
              onChange={handleChange}
            
              placeholder="Tell us why you want to share this post(optional)"
              rowsMax={7}
              spellCheck
              value={body}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            size="small"
            color="textSecondary"
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            Cancel
          </Button>
          <Button
          size="small"
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            variant="contained"
            
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
           Post
            {loading && <CircularProgress />}
          </Button>
        </DialogActions>
        </Container>
      </Dialog>
    </>
  );
};

Repost.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Repost;