import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator'

// Material UI
import HelpOutline from '@material-ui/icons/HelpOutline';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { shadows } from '@material-ui/system';
import { sizing } from '@material-ui/system';
// Local

import Footer from '../../components/Footer';
import CircularProgress from '../../components/CircularProgress';
import PageTitle from '../../components/PageTitle';
import TextLink from '../../components/TextLink';
import { route,APP_NAME } from '../../constants';
import useUI from '../../hooks/useUI';
import { createUser, key } from '../../redux/user';
import { isEmpty } from '../../utils';
import useStyles from './styles';


const Register = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('')
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
        <Card variant="outlined" style={{backgroundColor:"inherit", boxShadow: '6px 6px  rgba(0,0,0,0.2)'}}>
          <CardContent>

            <Typography
              className={classes.toUpper}
              color="primary"
              variant="h5"
            >
              Join {APP_NAME}
            </Typography>
            {!isEmpty(errors)
              && (
                <Alert
                  className={classes.alert}
                  severity="error"
                >
                 Form has invalid inputs.
                </Alert>
              )}
            <form
              onSubmit={handleSubmit}
              noValidate
            >
             <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <TextField
               variant="standard"
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
                label="Confirm password"
                name="password2"
                onChange={handleChange}
                type="password"
                value={formData.password2}
                 InputLabelProps={{style:{fontSize:14}}}
                  variant="standard"
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
                Create Account
                {loading && <CircularProgress />}
              </Button>
            </form>
          </CardContent>
        </Card>


       <Typography className={classes.login}>
        Already a member  {'?'}  {'  '}
       <TextLink to={route.login}>
      Login</TextLink>
        </Typography>

           <Footer/>
      </Container>

    </>
  );
};

export default Register;