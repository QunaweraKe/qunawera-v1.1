
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <Skeleton variant="circle" width={50} height={50} />
        </Grid>
        <Grid item xs={3} >
          <Skeleton variant="text" width={110} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{marginLeft:"10%"}}variant="rect" width="80%" height={90}  />
      <Skeleton style={{marginLeft:"10%"}} variant="text" width="80%" height={40}  animation="wave" />
    </div>
  );
};

export default SkeletonLoader;
