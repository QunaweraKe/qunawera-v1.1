import React from 'react';
import { useDispatch } from 'react-redux';


// Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
//local
import LinearProgressBar from '../../components/LinearProgressBar';
import PageTitle from '../../components/PageTitle';
import TextLink from '../../components/TextLink';
import {APP_NAME, route } from '../../constants';
import useUI from '../../hooks/useUI';
import { createUser, key } from '../../redux/user';
import { isEmpty } from '../../utils';
import useStyles from './styles';

import AppName from '../../components/AppName';




const Register = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
 
  const { errors, loading } = useUI(key.createUser, null, false);


  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    password: '',
    password2: '',
    username: '',
    

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(formData));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  };

  return (
    <>
      <PageTitle title="Register" />

      <Container className={classes.container}>
        <Card variant="outlined" style={{
          boxShadow:
            /* The top layer shadow */
            '0 1px 1px rgba(0,0,0,0.15)',
          /* The second layer */
          boxShadow: '0 10px 0 -5px #eee',
          /* The second layer shadow */
          boxShadow: '0 10px 1px -4px rgba(0,0,0,0.15)',
          /* The third layer */
          boxShadow: '0 20px 0 -10px #eee',

        }}>
          <CardContent>

           <Typography color="primary"
              variant="h5"> Join <AppName/></Typography>
             
         

           
            {!isEmpty(errors)
              && (
                <Alert
                  className={classes.alert}
                  severity="error"
                >
                 Form has invalid inputs.Try again.
                </Alert>
              )}
            <form
              onSubmit={handleSubmit}
              noValidate
            >
             <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <TextField
               variant="filled"
                required={true}
                autoComplete="name"
                className={classes.formField}
                error={Boolean(errors.name)}
                fullWidth
                helperText={errors.name}
                id="name"
                label="Full  Name"
                name="name"
                onChange={handleChange}
                type="text"
                value={formData.name}
                InputLabelProps={{style:{fontSize:14}}}
                
              />
               </Grid >

            <Grid item xs={12} sm={6}>

                  <TextField
                  variant="filled"
                 required={true}
                autoComplete="username"
                className={classes.formField}
                error={Boolean(errors.username)}
                fullWidth
                helperText={errors.username}
                id="login"
                label="Preferred Username"
                name="username"
                onChange={handleChange}
                type="text"
                value={formData.username}
                InputLabelProps={{style:{fontSize:14}}}
              />
            </Grid>
            </Grid>


              <TextField
                 required={true}
                autoComplete="email"
                className={classes.formField}
                error={Boolean(errors.email)}
                fullWidth
                helperText={errors.email}
                id="email"
                label="Email"
                name="email"
                onChange={handleChange}
                type="email"
                value={formData.email}
                InputLabelProps={{style:{fontSize:14}}}
                variant="filled"
              />
            
              <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <TextField
               required={true}
                autoComplete="new-password"
                className={classes.formField}
                error={Boolean(errors.password)}
                fullWidth
                helperText={errors.password}
                id="password"
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={formData.password}
                InputLabelProps={{style:{fontSize:14}}}
                variant="filled"
              />

              </Grid >

            <Grid item xs={12} sm={6}>
              <TextField
                required={true}
                autoComplete="new-password"
                className={classes.formField}
                error={Boolean(errors.password2)}
                fullWidth
                helperText={errors.password2}
                id="password2"
                label="Repeat Password"
                name="password2"
                onChange={handleChange}
                type="password"
                value={formData.password2}
                 InputLabelProps={{style:{fontSize:14}}}
                  variant="filled"
              />
               </Grid >
                </Grid >
              <Button
                className={classes.button}
                size="large"
                color="primary"
                disabled={loading}
                fullWidth
                type="submit"
                variant="outlined"

              >
                Sign Up
                {loading && <LinearProgressBar />}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card variant="outlined"  className={classes.card}>
       <Typography className={classes.login}>
        <span >Already a member </span> {'?'}  {'  '}
       <TextLink to={route.login} className={classes.textLink}>
      Sign In.</TextLink>
        </Typography>
        </Card>
        <div style={{ marginLeft: '20%',marginTop:"20%" }}>
      
          
      <Typography className={classes.footer} color="textSecondary" style={{ fontSize: ".8em" }}>
  {'© '}
  {new Date().getFullYear()}
  {'  '}

  {APP_NAME} {' ,'} LLC .All rights reserved.


</Typography>
  </div>
      </Container>

    </>
  );
};

export default Register;