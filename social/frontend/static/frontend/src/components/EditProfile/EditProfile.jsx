import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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

  const [count, setCount] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    bio: user.profile.bio,
    location: user.profile.location,
    website: user.profile.website,
   
  });

  const { loading } = useUI(key.editProfile, null, false);
  //For Payment field
//const Numbers=(event)=>{event.target.value=event.target.value.replace(/[^0-9]/g,'')};
  const handleAboutChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setCount(event.target.value.length)
  };
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
        variant="outlined"
        size="small"
          style={{ boxShadow: '2px 4px  rgba(0,0,0,.2)'}}
      >
        Edit
      </Button>

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        fullScreen
      >
        <Container maxWidth="sm">
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
        <Typography style={{fontSize:12,fontFamily:"monospace",fontWeight:"bold"}}>0/{count}</Typography>
          <TextField
            autoComplete="off"
            className={classes.formField}
            fullWidth
            id="bio"
            label="About"
            name="bio"
            onChange={handleAboutChange}
            type="text"
            value={formData.bio}
            rows={8}
            variant="filled"
            multiline
           // inputProps={
          //    {maxLength:10}
             
         //  }
           //onInput={(event)=>Numbers(event)}
           helperText="Max 500 characters"
          />
         
          <br/>
          <TextField
            autoComplete="off"
            className={classes.formField}
            id="location"
            label="Location"
            name="location"
            onChange={handleChange}
            type="text"
            value={formData.location}
            variant="filled"
            fullWidth
            
          />
          <br/>
           <TextField
            autoComplete="off"
            className={classes.formField}
            id="website"
            label="Social media link"
            name="website"
            onChange={handleChange}
            type="text"
            value={formData.website}
            variant="filled"
            fullWidth
            helperText="Paste your social media url"
          />
          <br/>
         
             <Button
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            size="large"
            variant="contained"
            style={{boxShadow:"none",borderRadius:"5px",}}
            
          >
         Save
            {loading && <CircularProgress />}
          </Button>
        </DialogContent>
        </Container>
      </Dialog>
    </>
  );
};

export default EditProfile;
