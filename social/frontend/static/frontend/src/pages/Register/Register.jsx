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
  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage("Strong password")
    } else {
      setErrorMessage('Your password is weak,provide at least 8 characters,1 uppercase & 1 symbol')
    }
  }

  const [formData, setFormData] = React.useState({
    email: '',
    lastname:'',
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
      [event.target.lastname]: event.target.value,
      [event.target.password]: validate(event.target.value),
    });
  };

  return (
    <>
      <PageTitle title="Register" />

      <Container className={classes.container}>
        <Card variant="outlined">
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
                label="First Name"
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
                autoComplete="name"
                className={classes.formField}
                error={Boolean(errors.name)}
                fullWidth
                helperText={errors.name}
                id="lastname"
                label="Last Name"
                name="lastname"
                onChange={handleChange}
                type="text"
                value={formData.lastname}
                InputLabelProps={{style:{fontSize:14}}}
              />
            </Grid>
            </Grid>
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
              <Grid container spacing={2}>
              <Grid item>

              <HelpOutline className={classes.helpOutline}/>

              </Grid>
              <Grid item>
              <span style={{
          fontWeight: '500px',
          fontSize:"10px",
          color: 'green',
        }}>{errorMessage}</span>
        </Grid>
        </Grid>
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
        Returning User  {'?'}  {'  '}
       <TextLink to={route.login}>
      Login</TextLink>
        </Typography>

           <Footer/>
      </Container>

    </>
  );
};

export default Register;