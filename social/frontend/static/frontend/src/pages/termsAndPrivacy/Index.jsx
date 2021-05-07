import React from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const  termsAndPrivacy = () => {
  const classes = useStyles();

  return (
    <div className={classes.indexLayout}>
   <Typography>

   terms and privacy
     </Typography>
    </div>
  );
};

export default  termsAndPrivacy;