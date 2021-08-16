import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import {red }from '@material-ui/core/colors/red';
// Local
import ConfirmationDialog from '../ConfirmationDialog';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import {
  key,
  removePost,
  removeReply,
  selectPost,
} from '../../redux/post';

const DeletePost = React.forwardRef((props, ref) => {
  const { postId, setAnchorEl, type } = props;
  const dispatch = useDispatch();
  const classes=useStyles();
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
         <RemoveCircleRoundedIcon style={{color:"red"}}/>

        <ListItemText
          primary="Remove this item"
          primaryTypographyProps={{
            color:'error',
          }}
          classes={{primary:classes.listItem}}
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
          This action can’t be undone and it will be remove everything associated to this post
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
