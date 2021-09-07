import PropTypes from 'prop-types';
import React from 'react';

// Material UI
import IconButton from '@material-ui/core/IconButton';

// Local


import useStyles from './styles';

const NextButton = ({ callback, loading, nextUrl }) => {
  const classes = useStyles();

  return nextUrl
    ? (
      <IconButton
        classes={{ root: classes.root }}
        color="secondary"
        disabled={loading}
        onClick={callback}
        
        fullWidth
      >
         view  more posts
        {loading }
      </IconButton>
    ) : null;
};

NextButton.defaultProps = {
  loading: false,
  nextUrl: null,
};

NextButton.propTypes = {
  callback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  nextUrl: PropTypes.string,
};

export default NextButton;
