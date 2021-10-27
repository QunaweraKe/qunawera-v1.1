import React from 'react';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import CancelIcon from '@material-ui/icons/Cancel';

// Local
import useStyles from './styles';

const DialogCloseButton = ({ ...props }) => {
  const classes = useStyles();

  return (
    <IconButton
      classes={{ root: classes.button }}
      color="red"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <CancelIcon />
    </IconButton>
  );
};

export default DialogCloseButton;
