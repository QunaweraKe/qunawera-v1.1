import PropTypes from 'prop-types';
import React from 'react';

// Local
import useStyles from './styles';

const SubHeading= ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
