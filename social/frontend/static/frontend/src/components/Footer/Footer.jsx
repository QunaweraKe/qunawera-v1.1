import React from 'react';

//Material UI

import Typography from '@material-ui/core/Typography';
//local imports

import { APP_NAME, route } from '../../constants';
import useStyles from './styles';


const Footer = () => {

  const classes = useStyles();
  return (
    <>




      <Typography className={classes.footer} color="textSecondary" style={{ fontSize: ".8em" }}>
        {'© '}
        {new Date().getFullYear()}
        {'  '}

        {APP_NAME} {' ,'} LLC .All rights reserved.


      </Typography>

    </>

  );

};


export default Footer;
