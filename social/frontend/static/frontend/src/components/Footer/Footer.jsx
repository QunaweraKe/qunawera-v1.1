import React from 'react'
import { Link } from 'react-router-dom';

//Material UI

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//local imports
import ContactUs from '../ContactUs';
import Terms from '../Terms';
import { APP_NAME,route } from '../../constants';
import useStyles from './styles';


const Footer = () => {

const classes = useStyles();
return(
<div className={classes.footer}>


    <Typography variant="body10" color="textSecondary" align="center"  style={{fontSize:"10px",fontWeight:"bold"}}>
      {'© '}
        {new Date().getFullYear()}
      { '  '}

      {APP_NAME} {' ,'} LLC .All rights reserved.

     
    </Typography>
      <Grid container spacing={2} justify="center">
     <Grid item  >

      <ContactUs/>

      </Grid >
       <Grid item  >

      <Terms/>

       </Grid >
  <Grid item  >
       <Link color="primary" to={route.termsAndPrivacy} style={{fontSize:"10px",fontWeight:"bold"}}>
      How It Works
      </Link>
        <Grid item  >

       </Grid >
       </Grid >

        </Grid >
    </div>
  );

};


export default Footer;
