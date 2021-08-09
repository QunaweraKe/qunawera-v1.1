// Material UI
import { CardActionArea } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
// Local
import { route } from '../../constants';
import {
  selectPost
} from '../../redux/post';
import Avatar from '../Avatar';
import DeletePost from '../DeletePost';
import LikePost from '../LikePost';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import useStyles from './styles';
import Repost from '../Repost';





const PostItemFeeds = ({ postId }) => {
  const pluralizeLikes = (length) => (length !== 1 ? 'Likes' : 'Like');
  const pluralizeComments = (length) => (length !== 1 ? ' Comments' : 'Comment');
  const classes = useStyles();
  const history = useHistory();

  const post = useSelector((s) => selectPost(s, postId));


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div className={classes.root}>

      <div className={classes.postContainer}
        style={{  minWidth: 200, marginTop: "8px" }}>


        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />

        </div>

        <div className={classes.post}>

          <PostHeader post={post} />

          <IconButton
            className={classes.postAction}
            onClick={handleMenuOpen}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',

            }}
            
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
          >

            <MenuItem
              onClick={() => (
                history.push(route.postDetail(post.id))
              )}
            >

              <ListItemText primary="View Details" className={classes.listItemSize} />
            </MenuItem>
            
            <MenuItem
              onClick={() => (
                history.push(route.profilePosts(post.author.slug))
              )}
            >

              <ListItemText primary="Author's Profile" className={classes.listItemSize} />

            </MenuItem>
         
            {post.is_author
              && (
                <DeletePost
                  setAnchorEl={setAnchorEl}
                  postId={post.id}
                  type="post"
                />
              )}

          </Menu>
          <Link to={route.postDetail(post.id)} className={classes.Link} >
          <CardActionArea >
          <div className={classes.text}>
            <Box display="flex" p={1} justifyContent='flex-start'>
              <Paper square style={{width:"100%",backgroundColor:"inherit"}}>
                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>
                
                {post.title
                  && (
                    <>
                     
                        <Typography variant="subtitle1" style={{ fontweight: "bolder" ,color:"textSecondary",textDecoration:"underline"}}>
                          {post.title.charAt(0).toUpperCase()}{post.title.slice(1)}

                        </Typography >

                     
                    </>
                  )}

                {post.body
                  && (
                    <>
                     
                        <Typography variant="body3" paragraph>
                          {post.body.charAt(0).toUpperCase()}{post.body.slice(1)
                         }
                         

                        </Typography >

                     
                    </>
                  )}

              </Paper>
             
              
           
            </Box>
           
          </div>

          </CardActionArea>
          </Link>
        </div>
  
      </div>
      <div className={classes.likeContainer}>

<LikePost
  postId={post.id}
  size="default"
  type="post"
/>
<div className={classes.repostContainer}>
          <Repost postId={postId} />
        </div>
</div>
<span style={{fontFamily:"monospace",fontWeight:"bold",marginLeft:"2%"}}>         {post.liked.length || 0}{' '}{pluralizeLikes(post.liked.length)}</span>
&middot;
<span style={{fontFamily:"monospace",fontWeight:"bold",marginLeft:"2%"}}>         {post.reply_ids?.length || 0}{' '}{pluralizeComments(post.reply_ids?.length)}</span>

      <Divider  />
     
  
    </div>
  );
};


export default PostItemFeeds;

//TODO: USER TYPING & floating action button
 //TODO: BID ONLY PARENT POST,ARRANGE CARD CONTENTS PROPERLY
 //semantic ui for items
 //start end payment location
//possible bug on reply item
//f&u link text for users