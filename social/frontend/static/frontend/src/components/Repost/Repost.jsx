import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Evergreen  UI
import { ShareIcon } from 'evergreen-ui'
// Material UI
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';


// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';
import PostParent from '../PostParent';

import useUI from '../../hooks/useUI';

import { createRepost, key, selectPost } from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';

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

   <IconButton

   onClick={handleOpen}
              variant="outlined"
              className={classes.chip
              }

              size="small"
              color="primary"
              >
               <ShareIcon/>
               </IconButton>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
      >
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography variant="subtitle1">
            Repost
          </Typography>
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
            
              placeholder="Additional information (optional)"
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
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            variant="outlined"
            size="small"
          >
           post
            {loading && <CircularProgress />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Repost.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Repost;