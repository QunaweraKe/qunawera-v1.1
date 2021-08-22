import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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
  const { postId, setAnchorEl, type } = props;
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
      < HighlightOffIcon />
         </ListItemIcon>
         

        <ListItemText
          primary="Close task"
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
        Closing on a task marks it as done.It will not be available to other users.
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
