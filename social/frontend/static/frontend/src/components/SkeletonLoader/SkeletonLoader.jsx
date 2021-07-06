
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item >
          <Skeleton variant="circle" width={50} height={50} />
        </Grid>
        <Grid  >
          <Skeleton style={{marginLeft:"5%",marginTop:"5px"}} variant="text" width={110} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{marginLeft:"10%"}}variant="rect" width="80%" height={90}  />
      <Skeleton style={{marginLeft:"60%"}} variant="text" width="30%" height={20}  animation="wave" />
      <Skeleton style={{marginLeft:"60%"}} variant="text" width="30%" height={20}  animation="wave" />
      <Skeleton style={{marginLeft:"10%"}}variant="rect" width="80%" height={20}  />
    </div>
  );
};

export default SkeletonLoader;
