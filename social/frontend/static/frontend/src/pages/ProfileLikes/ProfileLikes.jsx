import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Local
import AuthLayout from '../../components/AuthLayout';
import BackButton from '../../components/BackButton';
import SubHeading from '../../components/SubHeading';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import Posts from '../../components/Posts';
import ProfileInfo from '../../components/ProfileInfo';
import ProfileNav from '../../components/ProfileNav';

import { route } from '../../constants';

import useProfileUser from '../../hooks/useProfileUser';
import useUI from '../../hooks/useUI';

import { getProfileLikes, key, selectProfileLikes } from '../../redux/post';
import { selectUser } from '../../redux/user';

const ProfileLikes = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const posts = useSelector((s) => selectProfileLikes(s, slug));
  const user = useSelector(selectUser);

  const { profileUser, profileUserLoading } = useProfileUser(slug);
  const { fetched, loading, nextLoading } = useUI(
    key.profileLikes(slug), key.profileLikesNext(slug),
  );

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getProfileLikes(slug));
    }
  }, [slug]);

  const handleNext = () => {
    dispatch(getProfileLikes(slug, posts.next));
  };

  return (
    <>
      <PageTitle
        title={`Posts liked by ${profileUser.display_name || slug}`}
      />

      <AuthLayout>
        <SubHeading>
          <BackButton />
          <Typography align="center" variant="h6">
            {profileUser.display_name || slug}
          </Typography>
        </SubHeading>
        <ProfileInfo
          loading={profileUserLoading}
          profileUser={profileUser}
        />
        <ProfileNav
          active="likes"
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
                    variant="subtitle"
                    color="primary"
                    style={{ fontFamily: "monospace", fontWeight: "bold" }}
                  >
                    You have not liked any post
                  </Typography>
                  <Typography
                    paragraph
                    variant="body2"
                    color="textSecondary"
                    style={{ fontFamily: "monospace" }}
                  >
                    Once you like a post it will show up here...
                  </Typography>
                  
                  <Button
                    color="primary"
                    component={Link}
                    to={route.recommendedPosts}
                    variant="outlined"
                    size="small"
                  >
                  Look for more posts
                  </Button>
                </NoData>
              ) : (
                <NoData>
                  <Typography
                    paragraph
                    variant="h6"
                  >
                    {profileUser.display_name || slug}
                    {' '}
                    hasn&apos;t liked any posts
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
                    likes a post it&apos;ll show up here.
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

export default ProfileLikes;
