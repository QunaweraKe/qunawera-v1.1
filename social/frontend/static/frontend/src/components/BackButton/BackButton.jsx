import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

// Local
import useStyles from './styles';

const BackButton = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <IconButton
      className={classes.root}
      color="primary"
      onClick={() => history.goBack()}
    >
      < KeyboardBackspaceIcon />
    </IconButton>
  );
};

export default BackButton;
