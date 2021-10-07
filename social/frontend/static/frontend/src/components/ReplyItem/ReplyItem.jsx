import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Material UI

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
// Local
import Avatar from '../Avatar';
import TextLink from '../TextLink';
import ReportPost from '../ReportPost';
import DeletePost from '../DeletePost';
import EditPost from '../EditPost';
import LikePost from '../LikePost';
import { route } from '../../constants';
import { selectPost } from '../../redux/post';
import useStyles from './styles';

const ReplyItem = ({ replyId }) => {
  const classes = useStyles();

   dayjs.extend(relativeTime);
  const reply = useSelector((s) => selectPost(s, replyId));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
<>
    <div className={classes.root}>
     
      <Avatar
        className={classes.avatar}
        user={reply.author}
      />
      <div className={classes.textAndInteractContainer}>
        <div className={classes.textAndControl}>
          <div className={classes.text}>
            <TextLink
              className={classes.displayName}
              color="secondary"
              component={Link}
              to={route.profilePosts(reply.author.slug)}
              variant="h10"
            >
              {reply.author.display_name.charAt(0).toUpperCase()+reply.author.display_name.slice(1)}
            </TextLink>

            <Typography
              color="textSecondary"
              component="span"
              display="block"
              variant="body5"
            >

              {reply.body}

            </Typography>
        
          </div>
          
          {reply.is_author
            && (
              <div className={classes.control}>
                <IconButton
                  onClick={handleMenuOpen}
                  size="small"
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'top',
                  }}
                  getContentAnchorEl={null}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  transformOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom',
                  }}
                >
                  <DeletePost
                    setAnchorEl={setAnchorEl}
                    postId={reply.id}
                    type="reply"

                  />
                  <EditPost
                    setAnchorEl={setAnchorEl}
                    postId={reply.id}
                  />
                  <ReportPost
                    setAnchorEl={setAnchorEl}
                    postId={reply.id}
                    type="comment"
                    
                  />
                </Menu>
                   
              </div>
               
            )}
           
           
        </div>
        <Grid container spacing={2}>
        <Grid item >
        <Typography className={classes.displayDate} color="textSecondary">
             {dayjs(reply.created_at).fromNow()}
           
         </Typography>
         </Grid>
       
      <Grid item >
        <div className={classes.likeContainer}>
        
               <LikePost
                 postId={reply.id}
                 size="small"
                 type="comment"
               />
             </div>
             </Grid>
           
           
     

      
      </Grid>
      </div>

     
    </div>
 
         </>

  );
};

ReplyItem.propTypes = {
  replyId: PropTypes.number.isRequired,
};

export default ReplyItem;
