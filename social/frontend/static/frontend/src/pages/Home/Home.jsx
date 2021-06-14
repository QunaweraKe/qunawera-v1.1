import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectUser } from '../../redux/user';
// Material UI
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';



// Local
import IndexImage from '../../components/Files/Images/repair.svg';
import AuthLayout from '../../components/AuthLayout';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import Welcome from '../../components/Files/Images/newhome.svg';
import PageTitle from '../../components/PageTitle';
import Posts from '../../components/Posts';
import DialogPostForm from '../../components/DialogPostForm';

import useUI from '../../hooks/useUI';
import useStyles from './styles';
import { getFeed, key, selectFeed } from '../../redux/post';
import { selectUnreadNotificationsCount } from '../../redux/notifications';
import { APP_NAME, route } from '../../constants';


const Home = ( ) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);
  const feed = useSelector(selectFeed);
    const classes = useStyles();
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

      <AuthLayout >
        <SubHeading>
          <MobileMenu />
            <DialogPostForm/>
          <Typography variant="h6" color="primary" style={{fontWeight:"bold",marginLeft:"90px"}} >
            {APP_NAME}
          </Typography>
          <Grid container justify="center">

           <IndexImage style={{height:"105px",width:"120px",marginTop:"-10px",marginLeft:"0px",backgroundSize:"cover"}}/>
            </Grid>
             <Grid >



              </Grid >
              <Grid >
              <Tooltip title="search" arrow disableFocusListener>
              <IconButton
              size="small"
              color='primary'
              component={Link}


              to={route.search}


            >
           <SearchIcon />
            </IconButton>
            </Tooltip>
              </Grid>
        </SubHeading>
        <Heading>

        </Heading>


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





































































































