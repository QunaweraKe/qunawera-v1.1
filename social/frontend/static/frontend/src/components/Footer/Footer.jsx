import React from 'react'
import Link from '@material-ui/core/Link';

//Material UI

import Typography from '@material-ui/core/Typography';
//local imports
import { APP_NAME } from '../../constants';
import useStyles from './styles';
const Footer = () => {


const classes = useStyles();
return(
<div className={classes.footer}>
    <Typography variant="body10" color="textSecondary" align="center"  style={{fontSize:"12px",fontWeight:"bold"}}>
      {'© '}
        {new Date().getFullYear()}
      { '  '}

      {APP_NAME} {' ,'} Inc.
      <Link color="primary">
        Terms {'&'}  Privacy
      </Link>
     
    </Typography>
    </div>
  );

};


export default Footer;
