import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import {red }from '@material-ui/core/colors/red';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
  const { postId,  type } = props;
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
      <DeleteOutlineIcon style={{color:"red"}}/>
         </ListItemIcon>
         

        <ListItemText
          primary="Delete"
          primaryTypographyProps={{
            
          }}
          classes={{primary:classes.listItem}}
        />
      </MenuItem>
      <ConfirmationDialog
        buttontext="Yes,Remove"
        loading={loading}
        open={dialogOpen}
        onclickfalse={handleClose}
        onclicktrue={handleDelete}
        onClose={handleClose}
       
        text={`
          This action can’t be undone and it will be remove everything associated to this post
        `}
  
      />
    </>
  );
});

DeletePost.propTypes = {
  postId: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['post', 'reply']).isRequired,
};

export default DeletePost;
