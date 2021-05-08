import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectUser } from '../../redux/user';
// Material UI
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import NIcon from '@material-ui/icons/Notifications';
import NOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SortIcon from '@material-ui/icons/Sort';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsOutlined';

// Local
import IndexImage from '../../components/Files/Images/home.svg';
import AuthLayout from '../../components/AuthLayout';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import Welcome from '../../components/Files/Images/welcomehome.svg';
import PageTitle from '../../components/PageTitle';
import Posts from '../../components/Posts';
import PostForm from '../../components/PostForm';

import useUI from '../../hooks/useUI';

import { getFeed, key, selectFeed } from '../../redux/post';
import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { APP_NAME, route } from '../../constants';


const Home = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);
  const feed = useSelector(selectFeed);
  const active = (pathname) => location.pathname === pathname;
  const { fetched, loading, nextLoading } = useUI(key.feed, key.feedNext);

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getFeed());
    }
  }, []);

  const handleNext = () => {
    dispatch(getFeed(feed.next));
  };

  return (
    <>
      <PageTitle title="Home" />

      <AuthLayout>
        <Heading>

 <Typography variant="h6" color="primary" style={{fontWeight:"bold"}} >
            {APP_NAME}
          </Typography>

         <Grid  container justify="center">


         <Grid item >
          <Button
              color={active(route.notifications) ?  'primary' : 'secondary.main'}
              component={Link}
              endIcon={(
                <Badge
                  badgeContent={unreadNotificationsCount}
                  color="primary"
                >
                  {active(route.notifications)
                    ? <NIcon />
                    : <NOutlinedIcon />}
                </Badge>
              )}
              size='large'
              to={route.notifications}
            >
              <span className="nav-button-text" style={{fontSize:"13px",color:"primary",fontWeight:"bold"}}>Activities</span>
            </Button>
           </Grid>
           <Grid item>
                 <Button
              color='textSecondary'
              component={Link}
              size='large'
              endIcon={<EmojiObjectsIcon/>}
              to={route.recommendedUsers}

            >

              <span style={{fontSize:"13px",color:"primary",fontWeight:"bold"}}>Suggestions</span>
            </Button>
              </Grid>
                </Grid>
                <IndexImage style={{height:"100px",width:"100px"}}/>
        </Heading>
             <SubHeading>
          <MobileMenu />
          <Typography variant="h6" color="textSecondary" style={{fontWeight:"bold"}} >
            Recents
          </Typography>

         <Grid  container justify="flex-end">

          <Button
              color='textSecondary'
              component={Link}
              size='large'
              endIcon={<SearchIcon />}
              to={route.search}

            >

              <span style={{fontSize:"13px",color:"textSecondary"}}>Explore</span>
            </Button>



             </Grid>
        </SubHeading>
        <PostForm />
        <Posts
          loading={loading}
          posts={feed.results}
          noData={(
            <NoData>
              <Typography
                paragraph
                variant="h6"
              >
                Welcome to
                {' '}
                {APP_NAME}
                !
              </Typography>
              <div>
              <Welcome  style={{height:"300px",width:"300px"}}/>
              </div>
              <Typography
                color="textSecondary"
                paragraph
                variant="body2"
              >
                We enable you get and post tasks around your location  .First you need to find some people around you  to follow.Let's get started!
              </Typography>
              <Button
                color="primary"
                component={Link}
                to={route.recommendedUsers}
                variant="outlined"
                size="small"
              >
                Let&apos;s go!
              </Button>
            </NoData>
          )}
        />
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={feed.next}
        />
      </AuthLayout>
    </>
  );
};

export default Home;
