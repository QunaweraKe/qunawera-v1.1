import PropTypes from 'prop-types';
import React from 'react';

// Local
import useStyles from './styles';
import notFound from '../../components/Files/Images/notFound.svg';
const NoData = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
       <notFound />
    </div>
  );
};

NoData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoData;
