import React from 'react'
import Link from '@material-ui/core/Link';

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//local imports
import { APP_NAME } from '../../constants';
import useStyles from './styles';
const Footer = () => {


const classes = useStyles();
return(
<div className={classes.footer}>


    <Typography variant="body10" color="textSecondary" align="center"  style={{fontSize:"10px",fontWeight:"bold"}}>
      {'© '}
        {new Date().getFullYear()}
      { '  '}

      {APP_NAME} {' ,'} Inc.All rights reserved.

     
    </Typography>
      <Grid container spacing={3}>
     <Grid item xs={6} >

       <Link color="primary"  style={{fontSize:"10px",fontWeight:"bold"}}>
        Contact Us
      </Link>

      </Grid >
       <Grid item xs={6} >
       <Link color="primary"  style={{fontSize:"10px",fontWeight:"bold"}}>
        Terms {'&'} Privacy
      </Link>
       </Grid >


        </Grid >
    </div>
  );

};


export default Footer;
