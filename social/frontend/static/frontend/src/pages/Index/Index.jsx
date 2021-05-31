import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WorldIcon from '@material-ui/icons/PublicTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import shadows from '@material-ui/system';

// Local
import PageTitle from '../../components/PageTitle';
import Terms from '../../components/Terms';
import Index2 from '../../components/Files/Images/index.svg';
import './index.css'
import Footer from '../../components/Footer';
import IndexLoginForm from '../../components/IndexLoginForm';
import { APP_NAME, route } from '../../constants';
import useStyles from './styles';
import DividerWithText from '../../components/DividerWithText';

const Index = () => {
  const classes = useStyles();

  return (
  <>
      <PageTitle title="Welcome" />

    <div className={classes.indexLayout}>
     <Card variant="outlined" className={classes.root}  style={{boxShadow: '0px 6px  rgba(0,0,0,0.5)'}}>
     <CardContent>

      <main className={classes.mainContainer}>




        <div className={classes.content}>


          <div className={classes.ctaContainer}>

             <div className="container">
              <Typography className={classes.branding}
            color="primary"

            style={{fontWeight:"bold",fontSize:"40px"}}

            >

             {APP_NAME}
          </Typography>

    </div>
     <Typography color="textSecondary" variant="subtitle2" align="left" style={{fontWeight:"bold"}}>

           Lets get started
         </Typography>

            <Button
              size="small"
              className={classes.ctaItem}
              color="primary"
              component={Link}
              fullWidth
              to={route.register}
             variant="outlined"

            >
              Create a New Account
            </Button>

          </div>
    <DividerWithText>Or</DividerWithText>
    <div className={classes.ctaContainer}>
    <Button
              className={classes.ctaItem}
              color="primary"
              component={Link}

              fullWidth
              to={route.login}

               variant="outlined"
              size="small"

            >
              Login
            </Button>
             <Grid container spacing={0}>
            <Grid item>
            <Button disabled disableRipple="true" style={{fontSize:"15px",fontWeight:"bold"}}> By using this app you agree to </Button>

            </Grid>
             <Grid item style={{marginTop:"9px",marginLeft:"-10px"}}>
           <Terms/>
           </Grid></Grid>
            </div>

        </div>

      </main>
          </CardContent>
      </Card>

      <aside  className={classes.asideContainer}>
      <Index2 className={classes.image}/>
          <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography className={classes.ctaItem}
            color="textSecondary"
            variant="subtitle7"
            >

             Where you post
          </Typography>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p><Typography variant="h6" color="secondary" align="center" >

           {"& "}get manual tasks
         </Typography></p>
      </div>

    </div>



      </aside>
<div style={{marginTop:"50px",marginLeft:"2px"}}>
<Footer/>

</div>
    </div>


      </>
  );
};

export default Index;