import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
//Material UI
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
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
import Box from '@material-ui/core/Box';





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
               color="primary"
               className={classes.shareIcon} 
onClick={handleOpen}

> 

<ShareIcon />
</IconButton>
<Typography className={classes.share} color="textSecondary">
  Share
</Typography>
       <Dialog
        open={dialogOpen}
        onClose={handleClose}
       
  
      >
         <Container maxWidth="sm">
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Box position="absolute" top={5} right={10}>

          <Button
          size="large"
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            variant="contained"
            
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
           Post
            {loading && <CircularProgress />}
          </Button>

</Box>
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
                input:classes.input
              }}
              fullWidth
              multiline
              onChange={handleChange}
            
              placeholder="Share your thoughts on this ( optional)"
              rowsMax={2}
              spellCheck
              value={body}
            />
          </div>
        </DialogContent>
      
       
        </Container>
      </Dialog>
    </>
  );
};

Repost.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Repost;