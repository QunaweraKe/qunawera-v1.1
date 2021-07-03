
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3} >
          <Skeleton variant="circle" width={40} height={40} />
        </Grid>
        <Grid item xs={3} >
          <Skeleton variant="text" width={110} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{marginLeft:"10%"}}variant="rect" width="80%" height={100}  />
      <Skeleton style={{marginLeft:"10%"}} variant="text" width="80%" height={50}  animation="wave" />
    </div>
  );
};

export default SkeletonLoader;
