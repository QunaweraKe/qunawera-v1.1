import PropTypes from 'prop-types';
import React from 'react';
//material ui

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Local
import TextLink from '../TextLink';

import useStyles from './styles';

const ShowMoreRecommended = ({ to }) => {
  const classes = useStyles();

  return (
   
    <TextLink
      className={classes.link}
      to={to}
     
      
    
    >
    See More  <ArrowForwardIcon style={{marginLeft:90,}}/>
    </TextLink>

    
  );
};

ShowMoreRecommended.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ShowMoreRecommended;
