import PropTypes from 'prop-types';
import React from 'react';

// Material UI
import MuiCircularProgress from '@material-ui/core/CircularProgress';

// Local
import useStyles from './styles';

const CircularProgress = (props) => {
  const { size, thickness, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <MuiCircularProgress
      className={classes.bottom} 
      size={size}
      thickness={thickness}
    
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
    
    </div>
  );
};

CircularProgress.defaultProps = {
  size: 16,
  thickness: 7,
};

CircularProgress.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.number,
};

export default CircularProgress;
