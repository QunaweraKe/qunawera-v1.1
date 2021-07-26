
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div style={{marginLeft:"5%",marginTop:"15px"}}>
      <Grid container spacing={2}>
        
        <Grid item >
          <Skeleton animation="wave" variant="circle" width={50} height={50} />
        </Grid>
        <Grid  >
          <Skeleton style={{marginLeft:"2%",marginTop:"25px"}} variant="text" width={100} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{marginTop:"-2px" ,marginLeft:"10%"}}variant="rect" width="80%" height={90}animation="wave"  />
      <Skeleton style={{marginLeft:"10%"}}variant="text" width="80%" height={40}  animation="wave" />
    </div>
  );
};

export default SkeletonLoader;
