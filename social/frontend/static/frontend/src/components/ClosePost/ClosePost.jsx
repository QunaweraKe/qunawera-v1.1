import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI

import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

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



  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <MenuItem

onClick={handleOpen}
ref={ref}
> 

 

<ListItemText
  primary=" Close this post?"
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
     
        text={`
        This action will  change the status of the post to closed which means it wont be visible to you and those following you .Are you sure about this?
        `}
  
      />
    </>
  );
});

ClosePost.propTypes = {
  postId: PropTypes.number.isRequired,
  
  
};

export default ClosePost;
