
import React from 'react';
// MATERIAL UI

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
//local
import BackButton from '../../components/BackButton';
import AppName from '../../components/AppName';
import ContactUsDialog from '../../components/ContactUsDialog';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
 
}));


const ContactUs = () => {
  const classes= useStyles();
  return (
   <div>
     <>
   
   
       <BackButton/>
        <main>
        <div className={classes.heroContent}>
      
          <Container maxWidth="md">
          <Typography component="h2" variant="h4" color="primary">
          < AppName/> 
            </Typography>
        
            <Typography component="subtitle1" variant="h5" align="center" color="primary">
            Help Center
            </Typography>
              
          </Container>
        </div>
        <Container maxWidth="sm">
        
        <ContactUsDialog/>
       
        </Container>
      </main>
    </> 
    </div>
  );
};


export default ContactUs;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked