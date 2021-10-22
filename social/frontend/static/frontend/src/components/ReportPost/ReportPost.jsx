import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import FlagIcon from '@material-ui/icons/Flag';
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
  const { postId, setAnchorEl,type } = props;
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
      <FlagIcon style={{color:"red"}}/>
         </ListItemIcon>
         

<ListItemText
  primary={`Report  ${type} 
  `}
  primaryTypographyProps={{
    
  }}
  classes={{primary:classes.listItem}}
/>
</MenuItem>
    

      <ConfirmationDialog
        classes={{paper:classes.paper}}
        buttontext="Yes,Report"
        loading={loading}
        open={dialogOpen}
        onclickfalse={handleClose}
        onclicktrue={handlereportPost }
        onClick={handleClose}
        onEntered={handleEntered}
        text={`
        Do you really want to report this  as inappropiate?
        `}
  
      />
    </>
  );
});

ReportPost.propTypes = {
  postId: PropTypes.number.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['Post', 'Comment']).isRequired,
};

export default ReportPost;