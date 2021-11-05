import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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
      <Card variant="outlined" style={{marginTop:4}}>

      <Removed style={{height:300,width:300}}/>
      < Typography align="center" color="textSecondary"style={{marginTop:4,fontFamily:'monospace',fontSize:"20px"}}>
      Content not available  .

      </Typography>
      </Card>;
    }
    return renderedPost;
  };

  return (
    <>
      <PageTitle title="Post detail" />

      <AuthLayout>
      <SubHeading >
      <BackButton />
       
    
    </SubHeading>
        
       
        <PostDetailNav
          active="post"
          postId={postId}
        />
        {renderPost()}
        <Heading>        
        </Heading>
      </AuthLayout>
    </>
  );
};

export default PostDetail;
