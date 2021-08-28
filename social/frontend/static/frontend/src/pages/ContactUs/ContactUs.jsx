
import React from 'react';
// MATERIAL UI

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
//local
import BackButton from '../../components/BackButton';
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
   
    <main>
       <BackButton/>
        <div className={classes.heroContent}>
      
          <Container maxWidth="sm">
            <Typography component="h7" variant="h4" align="center" color="primary" gutterBottom>
              Support Center
            </Typography>
                 
    <Typography>Fill in all the fields below.</Typography>
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