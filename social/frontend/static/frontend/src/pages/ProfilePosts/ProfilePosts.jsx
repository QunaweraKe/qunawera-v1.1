import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Material UI

import Typography from '@material-ui/core/Typography';

// Local
import AuthLayout from '../../components/AuthLayout';
import BackButton from '../../components/BackButton';
import Heading from '../../components/Heading';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import Posts from '../../components/Posts';
import ProfileInfo from '../../components/ProfileInfo';
import ProfileNav from '../../components/ProfileNav';
import useProfileUser from '../../hooks/useProfileUser';
import useUI from '../../hooks/useUI';

import { getProfilePosts, key, selectProfilePosts } from '../../redux/post';
import { selectUser } from '../../redux/user';

const ProfilePosts = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const posts = useSelector((s) => selectProfilePosts(s, slug));
  const user = useSelector(selectUser);

  const { fetched, loading, nextLoading } = useUI(
    key.profilePosts(slug), key.profilePostsNext(slug),
  );
  const { profileUser, profileUserLoading } = useProfileUser(slug);

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getProfilePosts(slug));
    }
  }, [slug]);

  const handleNext = () => {
    dispatch(getProfilePosts(slug, posts.next));
  };

  

  return (
    <>
      <PageTitle title={profileUser.display_name || slug} />

      <AuthLayout>
        <Heading>
          <BackButton />
          <Typography variant="h6">
            {profileUser.display_name || slug}
          </Typography>
        
        </Heading>
        <ProfileInfo
          loading={profileUserLoading}
          profileUser={profileUser}
        />
        <ProfileNav
          active="posts"
          slug={slug}
        />
        <Posts
          loading={loading}
          noData={(
            user.slug === slug
              ? (
                <NoData>
                  <Typography
                    paragraph
                    variant="h6"
                    color="primary"
                  >
                    You have no posts yet
                  </Typography>

                  
                </NoData>
              ) : (
                <NoData>
                  <Typography
                    paragraph
                    variant="h6"
                  >
                    {profileUser.display_name || slug}
                    {' '}
                    hasn&apos;t posted yet
                  </Typography>
                  <Typography
                    color="textSecondary"
                    paragraph
                    variant="body2"
                  >
                    When
                    {' '}
                    {profileUser.display_name || slug}
                    {' '}
                    posts it&apos;ll show up here.
                  </Typography>
                </NoData>
              )
          )}
          posts={posts.results}
        />
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={posts.next}
        />
      </AuthLayout>
    </>
  );
};

export default ProfilePosts;
