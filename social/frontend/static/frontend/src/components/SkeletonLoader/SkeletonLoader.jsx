
import React from 'react';


//material ui
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid ,Card} from '@material-ui/core';

const SkeletonLoader = () => {


  return (
    <div style={{ marginTop:8,}}>
      <Card variant="outlined"
       style={{
        boxShadow:
          /* The top layer shadow */
          '0 1px 1px rgba(0,0,0,0.15)',
        /* The second layer */
        boxShadow: '0 10px 0 -5px #eee',
        marginTop:8,
      }} >
      <Grid container spacing={2}>
        
        <Grid item >
          <Skeleton animation="wave" variant="circle" style={{marginLeft:"2%",marginTop:5,marginBottom:"5px"}} width={50} height={50} />
        </Grid>
        <Grid  >
          <Skeleton style={{borderRadius:"5px",marginLeft:"10%",marginTop:"25px",marginBottom:"5px"}} variant="text" width={80} animation="wave" />
        </Grid>

      </Grid>
      <Skeleton style={{borderRadius:"5px",marginTop:"-2px" ,marginLeft:"10%",marginBottom:20}}variant="rect" width="80%" height={80}animation="wave"  />
      
</Card>
<Skeleton style={{marginTop:10,marginBottom:"15px"}}variant="rect" width="40%" height={20}animation="wave"  />
<Card variant="outlined"  style={{
            boxShadow:
              /* The top layer shadow */
              '0 1px 1px rgba(0,0,0,0.15)',
            /* The second layer */
            boxShadow: '0 10px 0 -5px #eee',
            marginTop:8,

          }} 
>
      <Grid container spacing={2}>
        
        <Grid item >
          <Skeleton animation="wave" variant="circle" width={50} height={50} style={{marginLeft:"2%",marginTop:5,marginBottom:"5px"}} />
        </Grid>
        <Grid  >
          <Skeleton style={{borderRadius:"5px",marginLeft:"10%",marginTop:"25px",marginBottom:"5px"}} variant="text" width={80} animation="wave" />
        </Grid>
        <Skeleton style={{borderRadius:"5px",marginTop:"15px" ,marginLeft:"10%",marginBottom:20}}variant="rect" width="80%" height={60}animation="wave"  />
      </Grid>
      </Card>
      <Skeleton style={{marginTop:10,marginBottom:"15px"}}variant="rect" width="50%" height={20}animation="wave"  />
    </div>
  );
};

export default SkeletonLoader;
