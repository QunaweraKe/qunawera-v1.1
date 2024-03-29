
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Material UI
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Alert from '@material-ui/lab/Alert';
//local
import CircularProgress from '../../components/CircularProgress';
import PageTitle from '../../components/PageTitle';
import TextLink from '../../components/TextLink';
import {APP_NAME, route } from '../../constants';
import useUI from '../../hooks/useUI';
import { key, loginUser } from '../../redux/user';
import { isEmpty } from '../../utils';
import useStyles from './styles';
import AppName from '../../components/AppName';




const Login = () => {

  const [showPassword, setShowPassword] = useState(true);
  const [logging, setShowLogging] = useState(true);

  const classes = useStyles();
  const dispatch = useDispatch();

  const { errors, loading } = useUI(key.login, null, false);

  const [formData, setFormData] = React.useState({
    login: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData));
  };

  const handleChange = (event) => {
    const value = event.target.type !== 'checkbox'
      ? event.target.value
      : event.target.checked;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };


  return (
    <div   className={classes.root} >
      <PageTitle title="Login" />

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

            <Typography
        
              color="primary"
              variant="h5"

            >
              <AppName/>
            </Typography>
            {!isEmpty(errors)
              && (
                <Alert
                  className={classes.alert}
                  severity="error"
                >
                  Your username and/or password was incorrect.Check it & try again.
                </Alert>
              )}
            <form
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                variant="filled"
                required={true}
                autoComplete="email"
                className={classes.formField}
                error={!isEmpty(errors)}
                fullWidth
                id="login"
                label="Username / Email"
                name="login"
                onChange={handleChange}
                type="text"
                value={formData.login}
                InputLabelProps={{ style: { fontSize: 14 } }}
              />
              <br/>
              <TextField
                variant="filled"
                required
                autoComplete="current-password"
                className={classes.formField}
                error={!isEmpty(errors)}
                fullWidth
                id="password"
                label="Password"
                name="password"
                onChange={handleChange}
                type={showPassword ? 'password' : 'text'}
                value={formData.password}
                InputLabelProps={{ style: { fontSize: 14 } }}
              />






              <IconButton
                aria-label="toggle password visibility"
                onClick={(e) => { setShowPassword(!showPassword) }}
                className={classes.visibility}
                edge="end"
              >
                {showPassword ? <Visibility style={{ fontSize: "18px" }} /> : <VisibilityOff style={{ fontSize: "18px" }} />}
              </IconButton>

              <Typography className={classes.forgot}  >
                <TextLink >Forgot Password {"?"} </TextLink>
              </Typography>
              <FormControlLabel
                className={classes.formField}
                control={(
                  <Switch
                    size="small"
                    checked={formData.rememberMe}
                    color="primary"
                    name="rememberMe"
                    onChange={handleChange}

                  />
                )}
                label={<span style={{ fontSize: "10px", fontWeight: "bold", color: "grey" }}>Keep me logged in</span>}
              />

              <Button
                className={classes.button}
                color="primary"
                fullWidth
                disabled={loading}
                type="submit"
                variant="outlined"
                size="large"
                onClick={(e) => { setShowLogging(!logging) }}
              >
                {logging ? <>Sign In</> : <><span style={{color:"primary"}}>Signing in</span> {loading && <CircularProgress />}</>}


              </Button>
            </form>
          </CardContent>

        </Card>
        <Card variant="outlined"  className={classes.card}>
        <Typography className={classes.register}>
          <span >New to {APP_NAME}  </span>{'?'}{'  '}
          <TextLink to={route.register} className={classes.textLink}>Create New Account.</TextLink>

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
    </div>
  );
};

export default Login;