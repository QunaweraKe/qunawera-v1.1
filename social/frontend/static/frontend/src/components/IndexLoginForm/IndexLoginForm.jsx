import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Local
import CircularProgress from '../CircularProgress';

import useUI from '../../hooks/useUI';

import { key, loginUser } from '../../redux/user';

import useStyles from './styles';

const IndexLoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading } = useUI(key.login, null, false);

  const [formData, setFormData] = React.useState({
    login: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData, history));
  };

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={handleSubmit}
    >
      <TextField
        required
        autoComplete="email"
        className={classes.textField}
        id="login"
        label="Username or Email"
        name="login"
        onChange={handleChange}
        type="text"
        value={formData.login}
        variant="filled"
        InputLabelProps={{style:{fontSize:14}}}


      />
      <TextField
        required
        autoComplete="current-password"
        className={classes.textField}
        id="password"
        label="Password"
        name="password"
        onChange={handleChange}
        type="password"
        variant="filled"
        value={formData.password}
         InputLabelProps={{style:{fontSize:14}}}


      />
      <Button
        className={classes.button}
        color="primary"
        disabled={loading}
        type="submit"
        size="small"
        variant="outlined"
         style={{ boxShadow: '2px 3px  rgba(0,0,0,.2)'}}

      >
        Login
        {loading && <CircularProgress />}
      </Button>
    </form>
  );
};

export default IndexLoginForm;