import PropTypes from 'prop-types';
import React from 'react';

// Local
import TextLink from '../TextLink';

import useStyles from './styles';

const ShowMoreRecommended = ({ to }) => {
  const classes = useStyles();

  return (
    <TextLink
      className={classes.link}
      to={to}
      variant="body1"
    >
     more options
    </TextLink>
  );
};

ShowMoreRecommended.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ShowMoreRecommended;
