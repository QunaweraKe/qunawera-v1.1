import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';

// Local
import AuthLayout from '../../components/AuthLayout';
import BackButton from '../../components/BackButton';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import PostDetailNav from '../../components/PostDetailNav';
import PostItem from '../../components/PostItem';
import useUI from '../../hooks/useUI';
import { getPostDetail, key, selectPost } from '../../redux/post';
import useStyles from './styles';
import Removed from '../../components/Files/Images/Removed.svg';
const PostDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { postId } = useParams();

  const post = useSelector((s) => selectPost(s, postId));

  const { fetched, loading } = useUI(key.postDetail(postId));

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getPostDetail(postId));
    }
  }, [postId]);

  const renderPost = () => {
    let renderedPost;
    if (loading) {
      renderedPost = <Loading />;
    } else if (post) {
      renderedPost = (
        <PostItem
          expandReplies
          postId={post.id}
        />
      );
    } else {
      renderedPost = 
      <div style={{fontFamily:'monospace',fontSize:"16px"}}>
        < Typography align="center">
        This post has been deleted  .

        </Typography>
        < Typography align="center">
        Contact support for more info. 

        </Typography>
        <Removed/></div>;
    }
    return renderedPost;
  };

  return (
    <>
      <PageTitle title="Post detail" />

      <AuthLayout>
      <SubHeading >
      <BackButton />
          <div>
            <Typography
              className={classes.heading}
              variant="h6"
              style={{fontWeight:"bolder"}}
            >
             Details
            </Typography>
          </div>
       
    
    </SubHeading>
        
       
        <PostDetailNav
          active="post"
          postId={postId}
        />
        {renderPost()}
        <Heading>
        <Link style={{fontFamily:"monospace",marginLeft:"30%"}}> View  More Related tasks</Link>
          
        </Heading>
      </AuthLayout>
    </>
  );
};

export default PostDetail;
