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
import shadows from '@material-ui/system';

// Local

import IndexImage from '../../components/Files/Images/home2.svg';import './index.css'
import Footer from '../../components/Footer';
import IndexLoginForm from '../../components/IndexLoginForm';
import { APP_NAME, route } from '../../constants';
import useStyles from './styles';
import DividerWithText from '../../components/DividerWithText';

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.indexLayout}>
<IndexLoginForm/>
     <Card variant="outlined" className={classes.root}  style={{ boxShadow: '2px 4px  rgba(0,0,0,.2)'}}>
     <CardContent>

      <main className={classes.mainContainer}>




        <div className={classes.content}>

          <div className={classes.ctaContainer}>
             <div className="container">
    <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography className={classes.ctaItem}
            color="primary"
            variant="h3"
            >

             {APP_NAME}
          </Typography>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p><Typography variant="h6" align="center">

           Gets it done {"..."}
         </Typography></p>
      </div>

    </div>
    </div>


            <Button

              className={classes.ctaItem}
              color="primary"
              component={Link}
              fullWidth
              to={route.register}
             variant="contained"
              size="small"
            >
              Create Account
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
              style={{ boxShadow: '2px 4px  rgba(0,0,0,.1)'}}
            >
              Login
            </Button>
            </div>

        </div>

      </main>
          </CardContent>
      </Card>

      <aside  className={classes.asideContainer}>

<IndexImage className={classes.image}/>
                  <List className={classes.asideList}>
          <ListItem>


            <ListItemText primary="Earn money doing simple tasks for others. " />
             </ListItem>
            <ListItem>

            <ListItemText primary="Easy job sharing platform. " />
          </ListItem>
        </List>

      </aside>
<div style={{marginTop:"50px",marginLeft:"2px"}}>
<Footer/>

</div>
    </div>
  );
};

export default Index;