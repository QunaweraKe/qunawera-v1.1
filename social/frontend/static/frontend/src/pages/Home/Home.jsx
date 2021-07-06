import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonGroup from '@material-ui/core/ButtonGroup';



// Local
import IndexImage from '../../components/Files/Images/repair.svg';
import AuthLayout from '../../components/AuthLayout';
import SkeletonLoader from '../../components/SkeletonLoader';
import Heading from '../../components/Heading';
import StepperSlide from '../../components/StepperSlide';
import SubHeading from '../../components/SubHeading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import Posts from '../../components/Posts';
import DialogPostForm from '../../components/DialogPostForm';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import { getFeed, key, selectFeed } from '../../redux/post';
import { APP_NAME, route } from '../../constants';




const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.6)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Home = ( ) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
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
      <PageTitle title="Feeds" />

      <AuthLayout >
        <SubHeading>
          <MobileMenu />
          
          <Typography variant="h6" color="primary" style={{fontWeight:"bold",marginLeft:".5vw"}} >
            {APP_NAME}
          </Typography>
          <Grid container justify="center">

           <IndexImage style={{height:"105px",width:"120px",marginTop:"-10px",marginLeft:"0px",backgroundSize:"cover"}}/>
            </Grid>
             
        </SubHeading>
        <Heading>
        <Grid justify="flex-end">
              <ButtonGroup color="primary" aria-label="outlined primary button group">
              <DialogPostForm/>
              <CustomTooltip title="explore posts and users" arrow disableFocusListener>
              <Button
              size="small"
              color='primary'
              component={Link}


              to={route.search}


            >
          Quick Search<SearchIcon />
            </Button>
            </CustomTooltip>
            
            </ButtonGroup>
              </Grid>
        </Heading>


        <Posts
          loading={loading}
          posts={feed.results}
          noData={(
            <NoData>
              
              <div>
             
      <SkeletonLoader/>
              </div>
              <Typography
                color="textSecondary"
                paragraph
                variant="body1"
              >
                We enable you get and post tasks around your location  .First you need to find some people around you  to follow.Let's get started!
              </Typography>
              
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update  Your Profile
      </Button>
      <Dialog open={open} onClose={handleClose} >
              <StepperSlide/>
              </Dialog>
             
             
             
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


//todo add finish later on dialog


































































































