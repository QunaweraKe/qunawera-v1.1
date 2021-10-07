import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined';
//Local 
import useUI from '../../hooks/useUI';
import {
  getReplies,
  key,
  selectPost,
  selectReplies
} from '../../redux/post';
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import LikePost from '../LikePost';
import NextButton from '../NextButton';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import ReplyForm from '../ReplyForm';
import ReplyItem from '../ReplyItem';
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
  

      <Card variant="outlined" className={classes.postContainer}
      style={{ minWidth: 200, marginTop: "8px" }}>


        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />
           
        </div>
        <div className={classes.post}>

          <PostHeader post={post} />
        
         

            <div className={classes.text}>

                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>
               
                {post.title
                  && (
                    <>
                     
                        <Typography  className={classes.title} color="textSecondary">
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
                  {post.image
                  && (
                <CardMedia
                  className={classes.media}

                  image={post.image}
                />
                  )}
                
            
              
            </div>


        </div>

        </Card>

     
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
          <>
              <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
         
              <ReplyForm postId={postId} />
          

            </Collapse>
            <Card variant="outlined" className={classes.postContainer}>
            <CardContent
              className={classes.replyContent}

            >
              {replies.results.map((replyId) => (
                <ReplyItem
                  key={replyId}
                  replyId={replyId}
                />
              ))}

                <NextButton
                callback={handleNext}
                loading={nextLoading}
                nextUrl={replies.next}
              />
            </CardContent>
            </Card>
        </>
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
 //start end payment location
//possible bug on reply item
//f&u link text for users
//number of shares