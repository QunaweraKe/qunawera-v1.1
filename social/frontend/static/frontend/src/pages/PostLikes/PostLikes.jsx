import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
// Local

import Loading from '../../components/Loading';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import UserList from '../../components/UserList';

import useUI from '../../hooks/useUI';

import { getPostLikes, key, selectPostLikes } from '../../redux/post';

const PostLikes = () => {

 
  const dispatch = useDispatch();
  const { postId } = useParams();

  const postLikes = useSelector((s) => selectPostLikes(s, postId));

  const { fetched, loading, nextLoading } = useUI(
    key.postLikes(postId), key.postLikesNext(postId),
  );

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getPostLikes(postId));
    }
  }, [postId]);

  const handleNext = () => {
    dispatch(getPostLikes(postId, postLikes.next));
  };

  const render = () => {
    let rendered;
    if (loading) {
      rendered = <Loading />;
    } else if (postLikes.results.length) {
      rendered = <UserList list={postLikes.results} />;
    } else {
      rendered = (
        <NoData>
          <Typography
            paragraph
            variant="subtitle1"
            color="primary"
            style={{fontFamily:"monospace",fontWeight:"bold"}}
          >
           Post has no likes yet
          </Typography>
         
        </NoData>
      );
    }
    return rendered;
  };

  return (
    <>

      <PageTitle title="Post likes" />
   
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
    
    >
        <ListSubheader>Liked Post</ListSubheader>
        <ListItem>
        {render()}
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={postLikes.next}
        />
        </ListItem>
      
    </List>
    </>
  );
};

export default PostLikes;
