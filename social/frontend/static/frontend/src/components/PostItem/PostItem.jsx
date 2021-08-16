import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { route } from '../../constants';
import useUI from '../../hooks/useUI';
import {
  getReplies,
  key,
  selectPost,
  selectReplies
} from '../../redux/post';
// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DeletePost from '../DeletePost';
import EditPost from '../EditPost';
import LikePost from '../LikePost';
import NextButton from '../NextButton';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import ReplyForm from '../ReplyForm';
import ReplyItem from '../ReplyItem';
import Repost from '../Repost';
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


      <div className={classes.postContainer}
      style={{ minWidth: 200, marginTop: "8px" }}>


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

            {post.is_author
              && (
                <EditPost
                  setAnchorEl={setAnchorEl}
                  postId={post.id}
                />
              )}
        
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

            <div className={classes.text}>

                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>
               
                {post.title
                  && (
                    <>
                     
                        <Typography  className={classes.title}>
                          {post.title.charAt(0).toUpperCase()}{post.title.slice(1)}

                        </Typography >

                     
                    </>
                  )}
              {post.body
                && (
                  <>

                    <Typography variant="body3" style={{ fontweight: "bold" }}>
                   {post.body.charAt(0).toUpperCase() }{post.body.slice(1)} 

                    </Typography >
                  </>
                )}
              
            </div>


        </div>

      </div>

      <Divider light />
      <CardActions
        classes={{ root: classes.cardActionsRoot }}
        disableSpacing
      >

        
        <div className={classes.likeContainer}>

          <LikePost
            postId={post.id}
            size="default"
            type="post"
          />

        </div>
       
        <div>
          <Repost postId={postId} />
        </div>

        <div >

<IconButton
  className={classes.replies}
  disabled={loading}
  onClick={handleReplies}
  
  
>



  <RateReviewOutlinedIcon  />



  {loading && <CircularProgress />}
</IconButton>

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
              <ReplyForm postId={postId} />
              <CardHeader

                className={classes.replyHeader}
                title="All Reviews"
                
                titleTypographyProps={{
                  className: classes.title,
                  variant: 'subtitle1',
                  color: 'textSecondary',

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

            </CardContent>
          </Collapse>
        )}
      <Divider light classes={{ root: classes.divider }} style={{ height: "3px" }} />
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
//f&u link text for users
//number of shares