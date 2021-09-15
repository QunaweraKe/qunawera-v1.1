
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div style={{marginLeft:"5%",marginTop:"15px"}}>
      <Grid container spacing={2}>
        
        <Grid item >
          <Skeleton animation="wave" variant="circle" style={{marginLeft:"2%",marginTop:"15px",marginBottom:"5px"}} width={50} height={50} />
        </Grid>
        <Grid  >
          <Skeleton style={{borderRadius:"5px",marginLeft:"10%",marginTop:"25px",marginBottom:"5px"}} variant="text" width={80} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{borderRadius:"5px",marginTop:"-2px" ,marginLeft:"10%",marginBottom:"15px"}}variant="rect" width="80%" height={80}animation="wave"  />
      <Grid container spacing={2}>
        
        <Grid item >
          <Skeleton animation="wave" variant="circle" width={50} height={50} />
        </Grid>
        <Grid  >
          <Skeleton style={{borderRadius:"5px",marginLeft:"10%",marginTop:"25px",marginBottom:"5px"}} variant="text" width={80} animation="wave" />
        </Grid>
        <Skeleton style={{borderRadius:"5px",marginTop:"15px" ,marginLeft:"10%",marginBottom:"15px"}}variant="rect" width="80%" height={30}animation="wave"  />
      </Grid>
    </div>
  );
};

export default SkeletonLoader;
