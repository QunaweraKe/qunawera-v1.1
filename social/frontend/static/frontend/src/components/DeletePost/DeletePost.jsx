import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';

// Local
import ConfirmationDialog from '../ConfirmationDialog';

import useUI from '../../hooks/useUI';

import {
  key,
  removePost,
  removeReply,
  selectPost,
} from '../../redux/post';

const DeletePost = React.forwardRef((props, ref) => {
  const { postId, setAnchorEl, type } = props;
  const dispatch = useDispatch();

  const post = useSelector((s) => selectPost(s, postId));

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { loading } = useUI(key.removePost, null, false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleDelete = async () => {
    if (type === 'post') {
      await dispatch(removePost(postId, post.author.slug));
    }
    if (type === 'reply') {
      await dispatch(removeReply(postId, post.parent.id));
    }
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
          <DeleteIcon
            color="error"
            fontSize="small"
          />
        </ListItemIcon>
        <ListItemText
          primary="Delete"
          primaryTypographyProps={{
            color: 'error',
          }}
        />
      </MenuItem>
      <ConfirmationDialog
        buttontext="Agree"
        loading={loading}
        open={dialogOpen}
        onclickfalse={handleClose}
        onclicktrue={handleDelete}
        onClose={handleClose}
        onEntered={handleEntered}
        text={`
          This action can’t be undone and it will be remove everything associated to this post .
        `}
        
      />
    </>
  );
});

DeletePost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['post', 'reply']).isRequired,
};

export default DeletePost;
