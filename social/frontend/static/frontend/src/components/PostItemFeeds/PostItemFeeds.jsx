//Default
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


//material ui
import Grid from '@material-ui/core/Grid';
import RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { AccountCircleRounded } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PanToolIcon from '@material-ui/icons/PanTool';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ButtonGroup from '@material-ui/core/ButtonGroup';


// Local
import { route } from '../../constants';
import {
  selectPost
} from '../../redux/post';
import Avatar from '../Avatar';
import ClosePost from '../ClosePost';
import DeletePost from '../DeletePost';
import LikePost from '../LikePost';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import useStyles from './styles';
import Repost from '../Repost';







const PostItemFeeds = ({ postId }) => {
  const pluralizeLikes = (length) => (length !== 1 ? 'Likes' : 'Like');
  const pluralizeComments = (length) => (length !== 1 ? 'Reviews' : 'Task Review');
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

      <Card  square className={classes.postContainer} variant="outlined">


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
             {post.is_active
              && (
                <>
               
            <MenuItem
              onClick={() => (
                history.push(route.postDetail(post.id))
              )}
            >
                <ListItemIcon>
                <OpenInNewIcon />
        </ListItemIcon>
              
              <ListItemText primary="View Task  " classes={{ primary: classes.listItem }} />
           

            </MenuItem>
               </>
               )}  
        
        {post.is_active
              && (   
              <Repost postId={postId} />
              )}
           
            <MenuItem

onClick={() => (
  history.push(route.profilePosts(post.author.slug))
)}
>

<ListItemIcon>
<AccountCircleRounded color="primary" />
</ListItemIcon>
<ListItemText primary="View  Author" classes={{ primary: classes.listItem }} />

</MenuItem>

            {post.is_author && post.is_active
              &&  (
                <>

                  <DeletePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                    type="post"
                  />
                </>
              )}
 {post.is_author && post.is_active
              && (
                <>

                  <ClosePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                    type="post"
                  />
                </>
              )}
          </Menu>
         
              <div className={classes.text}>


                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>
                {post.image
                  && (
                <CardMedia
                  className={classes.media}

                  image={post.image}
                />
                  )}
                {post.title
                  && (
                    <>

                      <Typography className={classes.title} color="textSecondary">
                        {post.title.charAt(0).toUpperCase()}{post.title.slice(1)}

                      </Typography >


                    </>
                  )}

                {post.body
                  && (
                    <>

                      <Typography variant="body3" paragraph color="textSeconday" style={{ lineSpacing: "1px" }}>
                        {post.body.charAt(0).toUpperCase()}{post.body.slice(1)
                        }


                      </Typography >


                    </>
                  )}

              </div>

              <Typography>

{post.is_active 
  ? (
    <div className={classes.status} style={{fontFamily:"monospace", fontSize:"10px",color: "green" }} >
      Status &middot;Approved &middot; Open
    </div>
  ) : (
    <>
    <div className={classes.status} style={{ color: "red" }}>
     Status &middot;Not Approved &middot; Open<PanToolIcon />
    </div>
    <Typography style={{fontSize:"12px",fontFamily:"monospace"}}>
      This post is only visible to you ,has limited functionality and will diasappear on reload.
      Kindly wait as we approve the task.
      </Typography>
      </>
  )}
</Typography>
        </div>

      </Card>

 
          <div className={classes.likeContainer}>
          { post.is_active
              && (
                <>
            <LikePost
              postId={post.id}
              size="default"
              type="post"
            />
            </>
              )}

          </div>
          <Grid container spacing={1}>
          <Grid item >
       
   <ButtonGroup  variant="outlined" disableElevation color="primary" className={classes.buttonGroup}>
  <Button size="small"style={{fontFamily:"monospace"}}>{pluralizeLikes(post.liked.length)}</Button>
  <Button size="small" style={{marginLeft:"1%"}}><FavoriteRoundedIcon/>{post.liked.length || 0}</Button>
 
 
</ButtonGroup>
</Grid >

            <Grid item >
<ButtonGroup disableElevation color="primary" className={classes.buttonGroup}>
<Button size="small"style={{fontFamily:"monospace"}}>{pluralizeComments(post.reply_ids?.length)}</Button>
  <Button size="small"style={{marginLeft:"1%"}}><RateReviewOutlinedIcon/> {post.reply_ids?.length || 0}</Button>
</ButtonGroup>
</Grid >
                </Grid > 
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
//add chip to approved