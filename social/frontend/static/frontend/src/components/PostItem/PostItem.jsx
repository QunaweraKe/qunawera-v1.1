import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Evergreen  UI
import { ChatIcon } from 'evergreen-ui'
// Material UI
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import DetailsIcon from '@material-ui/icons/UnfoldMore';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
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
 
  const pluralizeOther = (length) => (length !== 1 ? 'comments' : 'comment');
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
     

      <div className={classes.postContainer}>


        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />

        </div>
        <div className={classes.post}>

          <PostHeader post={post} />
          <Card className={classes.cardProps} variant="outlined" >
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
          <ListItemText primary="More details" className={classes.listItemSize} />
        </MenuItem>
        <MenuItem
          onClick={() => (
            history.push(route.profilePosts(post.author.slug))
          )}
        >
          <ListItemIcon>
            <EmojiPeopleIcon fontSize="small" />
          </ListItemIcon>
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
          <Typography variant="subtitle1" color="primary">
            Task Description
            </Typography>
            <div className={classes.text}>
              {post.body
                && (

                  <Typography variant="subtitle8" color="black" style={{  letterSpacing: '1px' }}>
                    {post.body.charAt(0).toUpperCase() + post.body.slice(1)}

                  </Typography >

                )}
            </div>

            <Typography className={classes.postBody} variant="body8"  style={{ fontSize: "12px", letterSpacing: '1px' }}>
              {post.parent && <PostParent post={post.parent} />}
            </Typography>
            
            <Typography variant="subtitle1" color="primary">
             Required skills
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
             {post.skillset}
            </Typography>
            <Box
       alignItems="flex-start"
        display="flex"
        borderRadius="borderRadius"
        bgcolor="grey.50"
        m={1}
        p={1}
        style={{ marginLeft: "15%", width: '25%', height: '2rem' }}
      > <span style={{ color:"textSecondary"}}> Ksh.{post.payment}</span> 
      </Box>
      
      
            </Card>
        
        </div>

      </div>
    
     
      <Grid item xs={12} sm={6}>
        <IconButton className={classes.pluralize}
          onClick={handleReplies}>
          {post.reply_ids?.length || 0}{' '}{pluralizeOther(post.reply_ids?.length)}
        </IconButton>
      </Grid >

      <CardActions
        classes={{ root: classes.cardActionsRoot }}
        disableSpacing
      >

        <div >

          <IconButton
            className={classes.replies}
            disabled={loading}
            onClick={() => (
              history.push(route.postDetail(post.id))
            )}
          >



            < ChatIcon />



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
              <CardHeader

                className={classes.replyHeader}
                title="Comments"
                titleTypographyProps={{
                  className: classes.title,
                  variant: 'subtitle1',
                  color: 'textSecondary',
                  fontWeight:'bolder',
                }}
              />


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
                   <Divider light classes={{ root: classes.divider }} style={{height:"10px"}} />
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
 //start end payment location
//possible bug on reply item