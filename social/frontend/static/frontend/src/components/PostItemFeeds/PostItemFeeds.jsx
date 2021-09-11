//Default
import React from 'react';
import { useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';


//material ui
import Grid from '@material-ui/core/Grid';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
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
import { green } from '@material-ui/core/colors/green';
import { red } from '@material-ui/core/colors/red';
// Local
import { route } from '../../constants';
import {
  selectPost
} from '../../redux/post';
import Avatar from '../Avatar';
import ReportPost from '../ReportPost';
import DeletePost from '../DeletePost';
import LikePost from '../LikePost';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import useStyles from './styles';
import Repost from '../Repost';
import EditPost from '../EditPost';
import ClosePost from '../ClosePost';





const PostItemFeeds = ({ postId }) => {
  const pluralizeLikes = (length) => (length !== 1 ? 'Likes' : 'Like');
  const pluralizeComments = (length) => (length !== 1 ? 'Responses' : 'Response');
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);
  const post = useSelector((s) => selectPost(s, postId));
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchor(null);
  };


  return (
    <>
      <div className={classes.root}>

        <Card className={classes.postContainer} variant="outlined">


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

                      <ListItemText primary="In Details  " classes={{ primary: classes.listItem }} />


                    </MenuItem>
                  </>
                )}

              {post.is_active
                && (
                  <Repost
                    postId={post.id}
                    type="post"
                    setAnchorEl={setAnchorEl} />
                )}

              <MenuItem

                onClick={() => (
                  history.push(route.profilePosts(post.author.slug))
                )}
              >

                <ListItemIcon>
                  <AccountCircleRounded color="primary" />
                </ListItemIcon>
                <ListItemText primary="Author's Profile" classes={{ primary: classes.listItem }} />

              </MenuItem>
              {post.is_active
                && (
                  <ReportPost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                  />
                )}
            </Menu>




            <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
              {post.parent && <PostParent post={post.parent} />}
            </Typography>
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

            {post.image
              && (
                <CardMedia
                  className={classes.media}

                  image={post.image}
                />
              )}

          </div>



        </Card>


        <div className={classes.likeContainer}>
          {post.is_active
            && (
              <>
                <LikePost
                  postId={post.id}
                  size="default"
                  type="post"
                />
              </>
            )}
          {post.is_author && post.is_active
            && (
              <Button className={classes.actionButton} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Actions
              </Button>
            )}
          <Menu

            anchorEl={anchor}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',

            }}

            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anchor)}
            onClose={handleClose}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
          >
            {post.is_author && post.is_active
              && (
                <>


                  <EditPost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                  />


                  <ClosePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                  />
                  <DeletePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                    type="post" />

                </>)}
          </Menu>
          <Typography>

            {post.is_active
              ? (
                <>
                </>
              ) : (
                <>
                  <div className={classes.status} style={{ color: "green" }}>
                    <PanToolIcon />   Status&middot;Pending
                  </div>
                  <Typography align="center"color="green" style={{ fontSize: "16px", fontFamily: "monospace", position: "relative" }}>
                    This post is only visible to you as the author ,has limited functionality and will disappear on reload.
                    Kindly wait as we approve the task.
                  </Typography>
                </>
              )}
          </Typography>
        </div>
        <Grid container spacing={1}>
          <Grid item >

            <ButtonGroup size="small" variant="outlined" disableElevation className={classes.buttonGroup}>
              <Button disabled size="small" style={{ fontFamily: "monospace" }}>{pluralizeLikes(post.liked.length)}</Button>
              <Button
               component={Link}
               to={route.postLikes(post.id)} 
              size="small" 
              style={{ marginLeft: "1%", color: "red" }}>
                <FavoriteRoundedIcon />
                {post.liked.length || 0}
                </Button>
            </ButtonGroup>
          </Grid >

          <Grid item >
            <ButtonGroup size="small" disableElevation className={classes.buttonGroup}>
              <Button size="small" disabled style={{ fontFamily: "monospace" }}>{pluralizeComments(post.reply_ids?.length)}</Button>
              <Button
               component={Link}
                size="small"
                to={route.postDetail(post.id)}
                color="primary" style={{ marginLeft: "1%" }}>
                <RateReviewOutlinedIcon /> {post.reply_ids?.length || 0}
              </Button>
            </ButtonGroup>
          </Grid >
        </Grid >

      </div>
    </>

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