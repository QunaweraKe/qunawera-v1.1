import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// Local
import DialogCloseButton from '../DialogCloseButton';
import CircularProgress from '../CircularProgress';

import useUI from '../../hooks/useUI';

import { editProfile, key, selectUser } from '../../redux/user';

import useStyles from './styles';

const EditProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    bio: user.profile.bio,
    location: user.profile.location,
   
  });

  const { loading } = useUI(key.editProfile, null, false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
  
    await dispatch(editProfile(formData, user.slug));
    handleClose();
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleOpen}
        variant="contained"
        size="large"
          style={{ boxShadow: '2px 4px  rgba(0,0,0,.2)'}}
      >
        Edit Profile 
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        fullScreen
      >
        <DialogTitle>
          
          <Typography
            className={classes.title}
            variant="h6"
          >
            Edit profile
          </Typography>
          <DialogCloseButton onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <TextField
            autoComplete="off"
            className={classes.formField}
            fullWidth
            id="bio"
            label="About"
            name="bio"
            onChange={handleChange}
            type="text"
            value={formData.bio}
            rows={4}
            variant="filled"
            multiline
          />
          <TextField
            autoComplete="off"
            className={classes.formField}
            fullWidth
            id="location"
            label="Location"
            name="location"
            onChange={handleChange}
            type="text"
            value={formData.location}
            variant="filled"
          />
         
             <Button
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            size="large"
            variant="outlined"
            
          >
           Update
            {loading && <CircularProgress />}
          </Button>
        </DialogContent>
          
      </Dialog>
    </>
  );
};

export default EditProfile;
