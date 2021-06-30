import React from 'react';
import { Link } from 'react-router-dom';

// Material UI

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


// Local
import PageTitle from '../../components/PageTitle';
import Terms from '../../components/Terms';
import Indexsvg from '../../components/Files/Images/index.svg';
import './index.css'
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import HowItWorks from '../../components/HowItWorks';
import { APP_NAME, route,copyright } from '../../constants';
import useStyles from './styles';
import DividerWithText from '../../components/DividerWithText';

const Index = () => {
  const classes = useStyles();

  return (
  <>
      <PageTitle title="Welcome" />

    <div className={classes.indexLayout}>
     <Card variant="outlined" className={classes.root}  style={{boxShadow: '6px 6px  rgba(0,0,0,0.5)'}}>
     <CardContent>

      <main className={classes.mainContainer}>




        <div className={classes.content}>


          <div className={classes.ctaContainer}>

             <div className="container">
              <Typography className={classes.branding}
            color="primary"

            style={{fontWeight:"bold",fontSize:"40px"}}

            >

             {APP_NAME}
          </Typography>

    </div>
     <Typography color="textSecondary" variant="subtitle2" align="left" style={{fontWeight:"bold"}}>

           Lets get started
         </Typography>

            <Button
              size="large"
              className={classes.ctaItem}
              color="primary"
              component={Link}
              fullWidth
              to={route.register}
             variant="outlined"

            >
              Create a New Account
            </Button>

          </div>
    <DividerWithText>Or</DividerWithText>

    <div className={classes.ctaContainer}>
        <Typography color="textSecondary" variant="subtitle2" align="left" style={{fontWeight:"bold"}}>

           Already a member{"?"}
         </Typography>
    <Button
              className={classes.ctaItem}
              color="primary"
              component={Link}

              fullWidth
              to={route.login}

               variant="outlined"
              size="large"

            >
              Login
            </Button>
             <Grid container spacing={0}>
            <Grid item>
            <Button disabled disableRipple="true" style={{fontSize:"10px",fontWeight:"bold"}}> By using this app you agree to our Terms & Privacy.</Button>

            </Grid>
            </Grid>
            </div>

        </div>
      
      </main>
          </CardContent>
        
      </Card>
     
      <aside  className={classes.asideContainer}>
      <Indexsvg className={classes.image}/>
          <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography className={classes.ctaItem}
            color="textSecondary"
            variant="subtitle7"
            >

             Social task posting site
          </Typography>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p><Typography variant="subtitle2" color="primary" align="center" >

          post  manual tasks
         </Typography></p>
      </div>

    </div>


      </aside>
   
      <Grid container spacing={4} justify="center">
     <Grid item >
     
      <ContactUs />
     
      </Grid >
       <Grid item  >

      <Terms/>

       </Grid >
  <Grid item  >
    <HowItWorks/>
       
       </Grid >

        </Grid >


<div style={{marginTop:"80px",marginLeft:"10px"}}>
 
   <Footer/>
 {copyright}
</div>
    </div>


      </>
  );
};

export default Index;