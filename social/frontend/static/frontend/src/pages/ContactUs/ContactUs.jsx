
import React from 'react';
// MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    <CssBaseline />
    <main>
       <BackButton/>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h5" variant="h2" align="center" color="primary" gutterBottom>
             Qunawera Support Center
            </Typography>
            <Typography variant="subtitle" align="center" color="textSecondary" paragraph>

            </Typography>
            
          </Container>
        </div>
        <ContactUsDialog/>
      </main>
    </> 
    </div>
  );
};


export default ContactUs;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked