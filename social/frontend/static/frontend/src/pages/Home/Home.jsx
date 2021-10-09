import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

// Local

import WelcomeSvg from '../../components/Files/Images/newhome.svg';
import AuthLayout from '../../components/AuthLayout';
import StepperSlide from '../../components/StepperSlide';
import SubHeading from '../../components/SubHeading';
import Heading from '../../components/Heading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import AppName from '../../components/AppName';
import Posts from '../../components/Posts';
import DialogPostForm from '../../components/DialogPostForm';
import useUI from '../../hooks/useUI';
import useStyles from './styles';
import { getFeed, key, selectFeed } from '../../redux/post';
import { route } from '../../constants';



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
          <div style={{ width: '100%' }}>
      <Box display="flex" p={1}>
        <Box p={1} flexGrow={1} >
        <Typography variant="h6" color="primary" style={{ fontWeight: "bold", marginLeft: ".5vw" }} >
            <AppName/>
          </Typography>
        </Box>
       <Box>
       <Button
              fullWidth
              color='primary'
              component={Link}
              size="large"
              startIcon={
               
                <SearchOutlinedIcon />
                
              }
              to={route.search}
            >
              <span className="nav-button-text">Search</span>
            </Button>

         </Box>
       
      </Box>
      </div>




        </SubHeading>
        <Heading >
          pick a new location &middot; Nairobi
        </Heading>
      
        <Posts
          loading={loading}
          posts={feed.results}
          noData={(
            <NoData>
              <Paper className={classes.Paper} elevation={2}>
                <Typography
                  color="textSecondary"
                  paragraph
                  variant="body1"
                >
                  Lets get started 
                
             
                </Typography>
            
                
                <Dialog open={open} onClose={handleClose} >
                  <StepperSlide />
                </Dialog>

                <div style={{height:"250px",width:"250px",textAlign:"center",display:"inline-block"}}>
              < WelcomeSvg/>
              </div>
              
              </Paper>
           
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  Update  Your Profile
                </Button>
              <div>
                <Typography
                  color="textSecondary"
                  style={{ fontWeight: "bolder" ,fontFamily:"monospace"}}
                  variant="h7"
                >
                  Your posts & those you follow  will show up here...
                </Typography>
              </div>

            </NoData>
          )}
        />
    

  
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={feed.next}
        />
       
      </AuthLayout>
     
      <DialogPostForm />
       
    
    </>
  );
};

export default Home;


//todo add finish later on dialog


































































































