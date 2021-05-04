import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Local
import Footer from '../../components/Footer';
import CircularProgress from '../../components/CircularProgress';
import PageTitle from '../../components/PageTitle';
import TextLink from '../../components/TextLink';
import DividerWithText from '../../components/DividerWithText';
import { route,APP_NAME } from '../../constants';

import useUI from '../../hooks/useUI';

import { key, loginUser } from '../../redux/user';

import { isEmpty } from '../../utils';

import useStyles from './styles';

const Login = () => {

  const [showPassword, setShowPassword] = useState(true);


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
    <>
      <PageTitle title="Login" />

      <Container className={classes.container}>
        <Card >
          <CardContent>
            {!isEmpty(errors)
              && (
                <Alert
                  className={classes.alert}
                  severity="error"
                >
                  Invalid username/email or password
                </Alert>
              )}
            <Typography
              className={classes.toUpper}
              color="primary"
              variant="h6"

            >
              Login to {APP_NAME}
            </Typography>
            <form
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
               required={true}
                autoComplete="email"
                className={classes.formField}
                error={!isEmpty(errors)}
                fullWidth
                id="login"
                label="Username or Email"
                name="login"
                onChange={handleChange}
                type="text"
                value={formData.login}
                  InputLabelProps={{style:{fontSize:14}}}
              />
              <TextField
              required
                autoComplete="current-password"

                error={!isEmpty(errors)}
                fullWidth
                id="password"
                label="Password"
                name="password"
                onChange={handleChange}
                type={showPassword ?  'password':'text' }
                value={formData.password}
                InputLabelProps={{style:{fontSize:14}}}




              />






       <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => {setShowPassword(!showPassword)}}
                   className={classes.visibility}
                  edge="end"
                >
                  {showPassword ? <Visibility style={{fontSize:"18px"}}/> : <VisibilityOff style={{fontSize:"18px"}} />}
                </IconButton>


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
                label={<span style={{fontSize:"10px",fontWeight:"bold",color:"grey"}}>Keep me logged in</span>}
              />

             <Button
                className={classes.button}
                color="primary"
                fullWidth
                disabled={loading}
                type="submit"
                variant="outlined"
                size="small"
                style={{ boxShadow: '2px 4px  rgba(0,0,0,.1)'}}
              >
                Login
                {loading && <CircularProgress />}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Typography className={classes.register}>
              Don't have an account  {'?'}{'  '}
          <TextLink to={route.register}>Register now.</TextLink>

        </Typography>
       <DividerWithText>Or</DividerWithText>

              <Typography className={classes.forgot}  >
              <TextLink >Reset password  </TextLink>
               </Typography>

        <Footer/>
      </Container>
    </>
  );
};

export default Login;