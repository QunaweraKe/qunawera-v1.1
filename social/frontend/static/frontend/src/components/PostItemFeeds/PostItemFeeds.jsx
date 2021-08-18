import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
//material ui
import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { AccountCircleRounded } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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







const PostItemFeeds = ({ postId }) => {
  const pluralizeLikes = (length) => (length !== 1 ? 'Likes' : 'Like');
  const pluralizeShares = (length) => (length !== 1 ? 'Shares' : 'Share');
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

      <Card  className={classes.postContainer} variant="outlined">


        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />

        </div>

        <div className={classes.post}>

          <PostHeader post={post} />
          <Typography>

            {post.is_active
              ? (
                <div className={classes.status} style={{ color: "green" }} >
                  status(approved)
                </div>
              ) : (
                <div className={classes.status} style={{ color: "red" }}>
                  status(not approved)
                </div>
              )}
          </Typography>

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
                <ListItemIcon>
                <UnfoldMoreIcon />
        </ListItemIcon>
              
              <ListItemText primary="More About Task " classes={{ primary: classes.listItem }} />
            </MenuItem>

            <MenuItem

              onClick={() => (
                history.push(route.profilePosts(post.author.slug))
              )}
            >
              
              <ListItemIcon>
              <AccountCircleRounded />
        </ListItemIcon>
              <ListItemText primary="View  Profile" classes={{ primary: classes.listItem }} />

            </MenuItem>

            {post.is_author
              && (
                <>

                  <DeletePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                    type="post"
                  />
                </>
              )}

          </Menu>
          <Link to={route.postDetail(post.id)} className={classes.Link} >
            <CardActionArea classes={{ focusHighlight: classes.focus }} >
              <div className={classes.text}>


                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>
                <CardMedia
                  className={classes.media}

                  image={post.image}
                />

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

            </CardActionArea>
          </Link>
        </div>

      </Card>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} >
          <div className={classes.likeContainer}>

            <LikePost
              postId={post.id}
              size="default"
              type="post"
            />

          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div style={{ marginTop: "5%" }} >
            <span style={{
              fontWeight: "bold",
              fontSize: "11px",
              marginLeft: "2%",
              fontFamily: "monospace"
            }} >      {post.liked.length || 0}{' '} &middot; {pluralizeLikes(post.liked.length)}</span>

            <span style={{
              fontWeight: "bold",
              fontSize: "11px",
              marginLeft: "2%",
              fontFamily: "monospace",
            }}>         {post.reply_ids?.length || 0}{' '} &middot;{pluralizeComments(post.reply_ids?.length)}</span>

            <span style={{
              fontWeight: "bold",
              fontSize: "11px",
              marginLeft: "2%",
              fontFamily: "monospace",
            }}>         {post.repost_ids?.length || 0}{' '} &middot;{pluralizeShares(post.repost_ids?.length)}</span>
          </div>
        </Grid>
      </Grid>
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