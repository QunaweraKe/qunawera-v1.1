import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Local
import ConfirmationDialog from '../ConfirmationDialog';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import {
  key,
  closePost,
  selectPost,
} from '../../redux/post';

const ClosePost = React.forwardRef((props, ref) => {
  const { postId, setAnchorEl} = props;
  const dispatch = useDispatch();
  const classes=useStyles();
  const post = useSelector((s) => selectPost(s, postId));

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { loading } = useUI(key.closePost, null, false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleClosePost = async () => {
      await dispatch(closePost(postId, post.author.slug));
  
    
  };

  const handleEntered = () => {
    setAnchorEl(null);
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
      <CheckCircleIcon className={classes.Icon} />
         </ListItemIcon>

<ListItemText
  primary=" Mark as Finished"
  primaryTypographyProps={{
    
  }}
  classes={{primary:classes.listItem}}
/>
</MenuItem>
    
  

      <ConfirmationDialog
        buttontext="Yes"
        loading={loading}
        open={dialogOpen}
        onclickfalse={handleClose}
        onclicktrue={handleClosePost}
        onClose={handleClose}
        onEntered={handleEntered}
     
        text={`
        Closing a post means it will appear only on your profile.Are you sure about this?
        `}
  
      />
    </>
  );
});

ClosePost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,

  
};

export default ClosePost;
