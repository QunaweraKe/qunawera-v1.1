import PropTypes from 'prop-types';
import React from 'react';
//material ui

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Local
import TextLink from '../TextLink';

import useStyles from './styles';

const ShowMoreRecommended = ({ to ,type}) => {
  const classes = useStyles();

  return (
   <div>
    <TextLink
      className={classes.link}
      to={to}
     
      
    
    >
    See More  {type} 
    </TextLink>
   
    </div>
  );
};

ShowMoreRecommended.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['posts', 'users']).isRequired,
};

export default ShowMoreRecommended;
