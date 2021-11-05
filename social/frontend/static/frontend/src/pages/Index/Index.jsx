import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// Local
import PageTitle from '../../components/PageTitle';
import { route } from '../../constants';
import './index.css';
import useStyles from './styles';
import DividerWithText from '../../components/DividerWithText';
import Indeximg from '../../components/Files/Images/repair.svg';
import Footer from '../../components/Footer';
import AppName from '../../components/AppName';



const Index = () => {
  const classes = useStyles();

  return (
  <>
      <PageTitle title="Welcome" />

    <div className={classes.indexLayout}>
      <div className="paper">
     <Card variant="outlined" className={classes.root}  style={{
    boxShadow:
    /* The top layer shadow */
    '0 1px 1px rgba(0,0,0,0.15)',
    /* The second layer */
    boxShadow:'0 10px 0 -5px #eee' ,
    /* The second layer shadow */
    boxShadow:'0 10px 1px -4px rgba(0,0,0,0.15)',
     /* The third layer */
    boxShadow:'0 20px 0 -10px #eee',
    
    }} >
     <CardContent>

      <main className={classes.mainContainer}>




        <div className={classes.content}>


          <div className={classes.ctaContainer}>

           
              <Typography 
            color="primary"

            style={{fontWeight:"bold",fontSize:"40px"}}

            >

             <AppName/>
          </Typography>
        

    
     <Typography color="textSecondary" variant="subtitle2" align="left" style={{fontWeight:"bold"}}>

           Want to join ?
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
              Sign Up
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
            Sign In
            </Button>
             <Grid container spacing={0}>
            <Grid item>
            <Button disabled disableRipple="true" style={{fontSize:"10px",fontWeight:"bold"}}> By using this app you agree to our Terms & Privacy.</Button>

            </Grid>
            
            </Grid>
            <Grid item>
            <Button  disableRipple="true" style={{fontSize:"10px",fontWeight:"bold"}}> Want to be part of our workforce?</Button>

            </Grid>
            </div>

        </div>
      
      </main>
          </CardContent>
        
      </Card>
      </div>
      <aside  className={classes.asideContainer}>
      <Indeximg className={classes.image}/>
          <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography
            color="secondary"
            variant="subtitle4"
            style={{ textShadow: '#fff 2px 1px',fontFamily:"Arial"}}
            >

            <span style={{marginTop:5,float:"left",width:".6em",fontFamily:"monospace",fontSize:"250%",lineHeight:"80%"}}> S </span>tranded with a task &#x3f;
          </Typography>
        </h1>
      </div>
    
        <p><Typography variant="subtitle1"  color="primary"  >
          Meet people around who can do it.
         </Typography></p>
      

    </div>


      </aside>
   
    <Divider/>


   <Footer/>

    </div>


      </>
  );
};

export default Index;