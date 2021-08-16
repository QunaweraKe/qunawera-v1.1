import React from 'react';

//Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


//local imports
import ContactUs from '../../pages/ContactUs';
import Terms from '../../components/Terms';
import HowItWorks from '../../components/HowItWorks';
import Locations from '../../components/Locations';
import { APP_NAME} from '../../constants';
import useStyles from './styles';
const footers = [
  {
    title: 'Company',
    description: ['Team',  <HowItWorks/>, <ContactUs/>, <Locations/>],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: [ <Terms/>],
  },
];


const Footer = () => {

  const classes = useStyles();
  return (
    <>

<Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
 
                      {item}
                  
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.footer} color="textSecondary" style={{ fontSize: ".8em" }}>
        {'© '}
        {new Date().getFullYear()}
        {'  '}

        {APP_NAME} {' ,'} LLC .All rights reserved.
        Powered by Labkats

      </Typography>
     
      </Container>


     

    </>

  );

};


export default Footer;
