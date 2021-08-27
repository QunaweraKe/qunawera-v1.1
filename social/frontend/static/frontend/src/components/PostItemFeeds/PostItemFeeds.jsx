//Default
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


//material ui
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
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
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { AccountCircleRounded } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PanToolIcon from '@material-ui/icons/PanTool';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { red } from '@material-ui/core/colors/red';

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
import EditPost from '../EditPost';






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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <>
    <div className={classes.root}>

      <Card square className={classes.postContainer} variant="outlined">


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

                    <ListItemText primary="View Details  " classes={{ primary: classes.listItem }} />


                  </MenuItem>
                </>
              )}
            {post.is_author && post.is_active
            && (
            <EditPost
              setAnchorEl={setAnchorEl}
              postId={post.id}
            />
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
              <ListItemText primary="View  Author's Profile" classes={{ primary: classes.listItem }} />

            </MenuItem>

            {post.is_author && post.is_active
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
                <div className={classes.status} style={{ fontFamily: "monospace", fontSize: 10, color: "green" }} >
                  Status &middot; Open
              
                </div>
              ) : (
                <>
                  <div className={classes.status} style={{ color: "red" }}>
                  <PanToolIcon />   Status&middot;Not Approved &middot; Open
                  </div>
                  <Typography color="primary"style={{ fontSize: "12px", fontFamily: "monospace",position:"relative" }}>
                    This post is only visible to you as the author ,has limited functionality and will disappear on reload.
                    Kindly wait as we approve the task.
                  </Typography>
                </>
              )}
          </Typography>
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
          <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Quick Actions delete, edit, close
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>{post.is_author && post.is_active
              && (
                <>

                  <ClosePost
                    setAnchorEl={setAnchorEl}
                    postId={post.id}
                    type="post"
                  />
                </>
              )}</MenuItem>
      
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
              

      </div>
      <Grid container spacing={1}>
        <Grid item >

          <ButtonGroup size="small" variant="outlined" disableElevation className={classes.buttonGroup}>
            <Button disabled size="small" style={{ fontFamily: "monospace" }}>{pluralizeLikes(post.liked.length)}</Button>
            <Button disabled size="small" style={{ marginLeft: "1%" }}><FavoriteRoundedIcon />{post.liked.length || 0}</Button>


          </ButtonGroup>
        </Grid >

        <Grid item >
          <ButtonGroup size="small" disableElevation className={classes.buttonGroup}>
            <Button size="small" disabled style={{ fontFamily: "monospace" }}>{pluralizeComments(post.reply_ids?.length)}</Button>
            <Button disabled size="small" style={{ marginLeft: "1%" }}><RateReviewOutlinedIcon /> {post.reply_ids?.length || 0}</Button>
          </ButtonGroup>
        </Grid >
      </Grid >
    
    </div>

<Divider light style={{marginTop:6}}/>
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