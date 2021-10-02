//Default
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


//material ui

import Grid from '@material-ui/core/Grid';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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
import OpenPost from '../OpenPost';




const PostItemFeeds = ({ postId }) => {
  const pluralizeLikes = (length) => (length !== 1 ? 'Likes' : 'Like');
  const pluralizeComments = (length) => (length !== 1 ? 'Comments' : 'Comment');
  const pluralizeShares = (length) => (length !== 1 ? 'Shares' : 'Share');
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
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <div className={classes.root}
      >

        <Card
          style={{
            boxShadow:
              /* The top layer shadow */
              '0 1px 1px rgba(0,0,0,0.15)',
            /* The second layer */
            boxShadow: '0 10px 0 -5px #eee',

          }}
          className={classes.postContainer}
          variant="outlined"
        >


          <div className={classes.avatarContainer}>

            <Avatar user={post.author} />

          </div>

          <div className={classes.post}>

            <PostHeader post={post} />


            <IconButton
              className={classes.postAction}
              onClick={handleMenuOpen}
            >
              <ExpandMoreIcon />
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

                  <Typography variant="body3" paragraph color="textSeconday" >

                    {showMore ? post.body : `${post.body.substring(0, 150)}`}
                    {(post.body.length > 150)
                      ? (
                        <Button
                          style={{ lineSpacing: "1px", fontWeight: 700, marginLeft: 10, fontSize: 12 }}
                          color="primary"
                          onClick={() => { setShowMore(!showMore) }}>
                          {showMore ? "Show less" : "Read more..."}
                        </Button>
                      ) : (
                        <>
                        </>
                      )}

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

          {post.is_author && post.is_active
            && (
              <Button className={classes.actionButton} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                < PersonAddIcon /> Actions
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

                  {post.parent

                    ? (<>
                    </>
                    ) : (
                      <>

                        {post.closed

                          ? (
                            <OpenPost
                              setAnchorEl={setAnchorEl}
                              postId={post.id}
                            />) : (
                            <ClosePost
                              setAnchorEl={setAnchorEl}
                              postId={post.id}
                            />

                          )}


                      </>
                    )}
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
                     Status&middot;Pending  <AccessTimeIcon />  
                  </div>
                  <Typography color="green" style={{ fontSize: "16px", fontFamily: "monospace", position: "relative" }}>
                    This post is only visible to you as the author ,has limited functionality and will disappear on reload.
                    Kindly wait as we approve the task.
                  </Typography>
                </>
              )}
          </Typography>
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
          {post.parent

            ? (<>
            </>
            ) : (
              <>
                {post.is_active
                  && (
                    <Repost
                      postId={post.id}
                      type="post"
                      setAnchorEl={setAnchorEl}
                    />
                  )}
              </>
            )}
        </div>
  
        <Grid container spacing={1}  >
          <Grid item >
          {post.is_active
                && (
            <ButtonGroup
              size="large" disableElevation className={classes.buttonGroup}>
              <Button variant="standard" size="small" style={{ fontFamily: "monospace" }}>{pluralizeLikes(post.liked.length)}</Button>
              <Button
                component={Link}
                to={route.postLikes(post.id)}
                style={{ borderRadius: 6, marginLeft: "1%", color: "red" }}>

                {post.liked.length || 0}
              </Button>
            </ButtonGroup>
                 )}
          </Grid >

          <Grid item >
          {post.is_active
                && (
            <ButtonGroup disableElevation className={classes.buttonGroup}>
              <Button variant="standard" size="large" style={{ fontFamily: "monospace" }}>{pluralizeComments(post.reply_ids?.length)}</Button>
              <Button
                component={Link}
                to={route.postDetail(post.id)}
                color="primary" style={{ borderRadius: 6, marginLeft: "1%" }}>
                {post.reply_ids?.length || 0}
              </Button>
            </ButtonGroup>
            )}
          </Grid >
          <Grid item >

            {post.parent

              ? (<>
              </>
              ) : (
                <>
             {post.is_active
                && (
                  <ButtonGroup disableElevation className={classes.buttonGroup}>
                    <Button size="large" variant="standard" style={{ fontFamily: "monospace" }}>{pluralizeShares(post.repost_ids?.length)}</Button>
                    <Button

                      color="textSecondary" style={{ borderRadius: 6, marginLeft: "1%" }}>
                      {post.repost_ids?.length || 0}
                    </Button>
                  </ButtonGroup>
                  )}
                </>
              )}
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

//Divider in btngrp betwn

//Add Tags category before related posts-should contain key words...