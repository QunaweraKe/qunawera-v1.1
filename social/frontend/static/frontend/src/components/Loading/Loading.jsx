import PropTypes from 'prop-types';
import React from 'react';

// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

// Local
import useStyles from './styles';

const Loading = ({ spacing }) => {
  const classes = useStyles(spacing);

  return (
    <div className={classes.root}>
      <CircularProgress
        size={20}
        thickness={8}
      />
    </div>
  );
};

Loading.defaultProps = {
  spacing: 8,
};

Loading.propTypes = {
  spacing: PropTypes.number,
};

export default Loading;
