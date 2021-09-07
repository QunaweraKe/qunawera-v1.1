import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import ReportIcon from '@material-ui/icons/Report';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

// Local

import ConfirmationDialog from '../ConfirmationDialog';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import {
  key,
  reportPost,
  selectPost,
} from '../../redux/post';

const ReportPost = React.forwardRef((props, ref) => {
  const { postId, setAnchorEl} = props;
  const dispatch = useDispatch();
  const classes=useStyles();
  const post = useSelector((s) => selectPost(s, postId));
  const handleEntered = () => {
    setAnchorEl(null);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { loading } = useUI(key.reportPost, null, false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handlereportPost = async () => {
      await dispatch(reportPost(postId, post.author.slug));
  
    
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
      <ReportIcon style={{color:"red"}}/>
         </ListItemIcon>
         

<ListItemText
  primary=" Report "
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
        onclicktrue={handlereportPost }
        onClick={handleClose}
        onEntered={handleEntered}
     
        text={`
        Do you really want to report this post?
        `}
  
      />
    </>
  );
});

ReportPost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  
};

export default ReportPost;
