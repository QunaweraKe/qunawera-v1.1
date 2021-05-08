import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Evergreen  UI
import { ChatIcon } from 'evergreen-ui'
// Material UI

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { borders } from '@material-ui/system';
import DetailsIcon from '@material-ui/icons/UnfoldMore';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Divider from '@material-ui/core/Divider';


// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import NextButton from '../NextButton';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';

import { route } from '../../constants';

import DeletePost from '../DeletePost';
import EditPost from '../EditPost';
import LikePost from '../LikePost';
import ReplyForm from '../ReplyForm';
import ReplyItem from '../ReplyItem';
import Repost from '../Repost';

import useUI from '../../hooks/useUI';

import {
  getReplies,
  key,
  selectPost,
  selectReplies,
} from '../../redux/post';

import useStyles from './styles';
const PostItem = ({ expandReplies, postId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const post = useSelector((s) => selectPost(s, postId));
  const replies = useSelector((s) => selectReplies(s, postId));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(expandReplies);

  const { fetched, loading, nextLoading } = useUI(
    key.replies(postId), key.repliesNext(postId), Boolean(expandReplies),
  );

  React.useEffect(() => {
    if (!fetched && expandReplies) {
      dispatch(getReplies(postId));
    }
  }, []);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleReplies = async () => {
    if (!fetched) {
      await dispatch(getReplies(postId));
    }
    setExpanded(!expanded);
  };

  const handleNext = () => {
    dispatch(getReplies(postId, replies.next));
  };

  return (
    <div className={classes.root}>
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
        classes={{ list: classes.muiMenuList }}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        {post.is_author
          && (
            <DeletePost
              setAnchorEl={setAnchorEl}
              postId={post.id}
              type="post"
            />
          )}
        {post.is_author
          && (
            <EditPost
              setAnchorEl={setAnchorEl}
              postId={post.id}
            />
          )}
        <MenuItem
          onClick={() => (
            history.push(route.postDetail(post.id))
          )}
        >
          <ListItemIcon>
            <DetailsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Post Details"  className={classes.listItemSize}/>
        </MenuItem>
           <MenuItem
          onClick={() => (
            history.push(route.profilePosts(post.author.slug))
          )}
        >
          <ListItemIcon>
            <EmojiPeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Author's Profile" className={classes.listItemSize}/>
        </MenuItem>
      </Menu>
      <div className={classes.postContainer}>
        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />
        </div>
        <div className={classes.post}>
          {post.parent
            && (

              <Typography
                color="black"
                variant="subtitle3"

                className={classes.headerReshare}
              >

             Reposted by

              </Typography>


            )}
          <PostHeader post={post} />

          {post.body
            && (

              <Typography  variant="subtitle8" color="black" style={{fontSize:"12px", letterSpacing:'1px'}}>
                  {post.body.charAt(0).toUpperCase()+post.body.slice(1)}
              </Typography >

            )}


              <Typography className={classes.postBody}  variant="body8" color="black" style={{fontSize:"12px", letterSpacing:'1px'}}>
          {post.parent && <PostParent post={post.parent} />}
           </Typography>
        </div>

      </div>
       <Divider variant="inset"   classes={{root:classes.divider}} />
      <CardActions
        classes={{ root: classes.cardActionsRoot }}
        disableSpacing
      >

        <div >

          <IconButton
            className={classes.replies}
            disabled={loading}
            onClick={handleReplies}

          >



              < ChatIcon
              color="secondary"
              style={{fontSize:"20px"}} />


    <Typography color="secondary"
               className={classes.textSize}
               >
         {"   "}   <span style={{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"}}> &#183; </span>  {"  "} {post.reply_ids?.length || 0}{'  '}
        </Typography>
            {loading && <CircularProgress />}
          </IconButton>

        </div>
           <div className={classes.likeContainer}>

          <LikePost
            postId={post.id}
            size="default"
            type="post"
          />

        </div>
        <div className={classes.repostContainer}>
          <Repost postId={postId} />
        </div>
      </CardActions>
      {expanded && !loading
        && (
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent
              className={classes.replyContent}
            >
              <NextButton
                callback={handleNext}
                loading={nextLoading}
                nextUrl={replies.next}
              />
              {replies.results.map((replyId) => (
                <ReplyItem
                  key={replyId}
                  replyId={replyId}
                />
              ))}
              <ReplyForm postId={postId} />
            </CardContent>
          </Collapse>
        )}
    </div>
  );
};

PostItem.defaultProps = {
  expandReplies: false,
};

PostItem.propTypes = {
  expandReplies: PropTypes.bool,
  postId: PropTypes.number.isRequired,
};

export default PostItem;

//TODO: USER TYPING & floating action button

 //TODO: BID ONLY PARENT POST,ARRANGE CARD CONTENTS PROPERLY


 //semantic ui for items