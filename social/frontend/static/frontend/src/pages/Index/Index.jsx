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
import Indeximg from '../../components/Files/Images/repair.svg';
import './index.css'
import Footer from '../../components/Footer';
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
     <Typography color="textSecondary" variant="subtitle2" align="left" style={{textDecoration:"underline",fontWeight:"bold"}}>

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
        <Typography color="textSecondary" variant="subtitle2" align="left" style={{textDecoration:"underline",fontWeight:"bold"}}>

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
            <Grid item>
            <Button  disableRipple="true" style={{fontSize:"10px",fontWeight:"bold"}}> Want to Join Our Workforce?</Button>

            </Grid>
            </div>

        </div>
      
      </main>
          </CardContent>
        
      </Card>
     
      <aside  className={classes.asideContainer}>
      <Indeximg className={classes.image}/>
          <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography className={classes.ctaItem}
            color="secondary"
            variant="h6"
            >

             Tasks&Interaction
          </Typography>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p><Typography variant="h6"  align="center" >

          Join Millions of users around you
         </Typography></p>
      </div>

    </div>


      </aside>
   
     

<div style={{marginTop:"80px",marginLeft:"0px"}}>
<Grid container spacing={2} >
     <Grid item >
     
     <HowItWorks/>
     
      </Grid >
       <Grid item  >

      <Terms/>

       </Grid >

  
       
      

        </Grid >

   <Footer/>


</div>
    </div>


      </>
  );
};

export default Index;