import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import WorldIcon from '@material-ui/icons/PublicTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Box from '@material-ui/core/Box';
import shadows from '@material-ui/system';

// Local
import './index.css'
import Footer from '../../components/Footer';
import IndexLoginForm from '../../components/IndexLoginForm';
import { APP_NAME, route } from '../../constants';
import useStyles from './styles';
import DividerWithText from '../../components/DividerWithText';

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.indexLayout}>
      <main className={classes.mainContainer}>
       <IndexLoginForm/>
        <div className={classes.content}>

          <div className={classes.ctaContainer}>
             <div className="container">
    <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          <Typography className={classes.ctaItem}
            color="primary"
            variant="h4"
            >

             {APP_NAME}
          </Typography>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p><Typography variant="h6" align="center">
         <span>&ldquo;</span>    simple task sharing...   <span>&rdquo;</span>
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
              variant="outlined"
              size="small"
              style={{ boxShadow: '2px 4px  rgba(0,0,0,.1)'}}
            >
              Register
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
              variant="contained"
               size="small"
            >
              Login
            </Button>
            </div>
        </div>

      </main>
      <aside  className={classes.asideContainer}>

                  <List className={classes.asideList}>
          <ListItem>

           <ListItemIcon>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Earn money doing simple tasks for others. " />
             </ListItem>
            <ListItem>
                 <ListItemIcon>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Easy job sharing platform. " />
          </ListItem>
        </List>

      </aside>




    </div>
  );
};

export default Index;