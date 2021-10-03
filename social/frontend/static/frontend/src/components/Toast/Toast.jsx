import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

import Alert from '@material-ui/lab/Alert';

// Local
import { unsetToast } from '../../redux/ui';





const Toast = ({ message, severity }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    dispatch(unsetToast());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4500}
      onClose={handleClose}
  
      >
      <Alert
        elevation={1}
        onClose={handleClose}
        severity={severity}
        icon={false} 
        style={{borderRadius:50,}}
      >
        <Typography style={{fontFamily:"RobotoDraft",fontSize:16,alignItems:"center",padding:"3px 4px",transitionDuration:"1s",}}>
        {message}
        </Typography>
       
      </Alert>
    </Snackbar>
  );
};

Toast.defaultProps = {
  severity:   'info',
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf([
    'error',
    'info',
    'success',
    'warning',
  ]),
};

export default Toast;
