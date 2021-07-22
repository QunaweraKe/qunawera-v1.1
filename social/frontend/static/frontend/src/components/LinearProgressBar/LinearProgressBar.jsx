
import React from 'react';

// Material UI

import LinearProgress from '@material-ui/core/LinearProgress';

// Local
import useStyles from './styles';

const LinearProgressBar = () => {
  const classes = useStyles();


return (
  <div className={classes.root}>
    <LinearProgress  color="primary" />
  </div>
);
};
export default LinearProgressBar;
