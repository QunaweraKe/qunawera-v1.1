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
  openPost,
  selectPost,
} from '../../redux/post';

const OpenPost = React.forwardRef((props, ref) => {
  const { postId} = props;
  const dispatch = useDispatch();
  const classes=useStyles();
  const post = useSelector((s) => selectPost(s, postId));

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { loading } = useUI(key.closePost, null, false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpenPost = async () => {
      await dispatch(openPost(postId, post.author.slug));
  
    
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
  primary=" Mark  as Unfinished "
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
        onclicktrue={handleOpenPost}
        onClose={handleClose}
        
     
        text={`
      This will make your post visible to your followers again.
        `}
  
      />
    </>
  );
});

OpenPost.propTypes = {
  postId: PropTypes.number.isRequired,

  
};

export default OpenPost;
