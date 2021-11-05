//Default
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


//material ui
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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
import { green } from '@material-ui/core/colors/green';
import { red } from '@material-ui/core/colors/red';
// Local
import { route } from '../../constants';
import DialogCloseButton from '../DialogCloseButton';
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
                    type="Post"
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

                          style={{ lineSpacing: "2px", fontWeight: "bold", marginLeft: 10, fontSize: 11 }}
                          color="primary"
                          onClick={() => { setShowMore(!showMore) }}>
                          {showMore ? "show less" : "read more"}
                        </Button>
                      ) : (
                        <>
                        </>
                      )}

                  </Typography >




                </>
              )}

          </div>



        </Card>
        {post.parent

          ? (<>
          </>
          ) : (
            <>

              {post.closed

                ? (
                  <Typography>finished task</Typography>) : (
                  <Typography>open task</Typography>
                )}


            </>
          )}
        <Box
          sx={{
            display: 'flex',
            alignItems: "right",
            width: 'fit-content',
            color: 'text.Secondary',
            '& svg': {
              m: 7,

            },
            '& hr': {
              mx: 0.5,
              m: 7,
            },
          }}
        >
          <div className={classes.likeContainer}>



            <Typography>

              {post.is_active
                ? (
                  <>
                  </>
                ) : (
                  <>
                    <div className={classes.status} style={{ color: "green" }}>
                      Pending  Approval<AccessTimeIcon />
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
                      <>
                        <Divider orientation="vertical" style={{ borderRadius: 25, height: 40, width: 5, margin: 15, }} />
                        <Repost
                          postId={post.id}
                          type="post"
                          setAnchorEl={setAnchorEl}
                        />
                      </>
                    )}
                </>
              )}

            {post.is_author && post.is_active
              && (
                <>
                  <Divider orientation="vertical" style={{ borderRadius: 25, height: 40, width: 5, margin: 15, }} />
                  <IconButton color="primary" aria-haspopup="true" onClick={handleClick}>

                    < PersonAddIcon />

                  </IconButton>
                  <Typography color="textSecondary" className={classes.actions}>Actions</Typography>
                </>
              )}
            <Menu
              classes={{ paper: classes.menuPaper }}
              anchorEl={anchor}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'top',

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
              <DialogCloseButton onClick={handleClose} style={{ marginLeft: 0, marginTop: 0, }} />
              <Divider variant="middle" />
              {post.is_author && post.is_active
                && (
                  <>

                    <EditPost
                      setAnchorEl={setAnchorEl}
                      postId={post.id}
                      type="Post"
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
                      type="Post" />

                  </>)}




            </Menu>

          </div>
        </Box>

        <Divider />
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