import React from 'react';
import { useDispatch } from 'react-redux';


// Material UI
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/EditOutlined';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import red from '@material-ui/core/colors/red';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
// Local

import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';
import useUI from '../../hooks/useUI';
import { isEmpty } from '../../utils';
import { createPost, key } from '../../redux/post';
import useStyles from './styles';
import { DialogContentText } from '@material-ui/core';
//functions
const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.6)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogPostForm = () => {
  const [image, setImage] = React.useState({ preview: "", raw: "" });
  const [body, setBody] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [requirements, setRequirements] = React.useState("")



  const handleImage = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    if (event.target.files.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0]
      });
    }

  };
  const handleBody = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setBody(event.target.value);
  };
  const handleRequirements = (event) => {
    event.preventDefault();
    setRequirements(event.target.value);
  };
  const removeImage = (event) => {
    event.preventDefault();
    setImage('')
  };
  const handleTitle = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { errors, loading } = useUI(key.createPost, null, false);
 
  const handleClose = () => {
    setDialogOpen(false);
    setImage('');
  };

  const handleOpen = () => {
    setDialogOpen(true);

  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("body", body);
      formData.append("title", title);
      formData.append("requirements", requirements);
      formData.append("image", image.raw, image.name);
      await dispatch(createPost(formData));
      setImage('');
      setTitle('');
      setBody('');
      setRequirements('')
      handleClose();
      return console.log("success")
    } catch (err) {
      return console.log("error")
    }
  };


  return (
    <>
      <div >
        <CustomTooltip title="create a new task listing" arrow disableFocusListener>
          <Fab className={classes.fab}
            onClick={handleOpen}
            size="small"
            variant="extended"
            color="primary" aria-label="edit"
            sx={{ mr: 2 }}
            style={{ textDcoration: "underline", margin: 10, bottom: 10, right: 30, left: "auto", position: "fixed" }}>
            <EditIcon />
            Post
          </Fab>
        </CustomTooltip>
      </div>

      <Dialog
        style={{
          left: "80",
          height: "fit-content",
          width: "fit-content",
          bottom: 0


        }}
        open={dialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        classes={{ paper: classes.paper }}
        hideBackdrop
        disableEnforceFocus
        fullScreen

      >
        {!isEmpty(errors)
          && (
            <Alert
              severity="error"
            >
              Form has invalid inputs.
            </Alert>
          )}
        <Container maxWidth="sm">
          <Card variant="outlined" style={{ marginTop: 10, }}>
            <DialogTitle>
              <Box position="absolute" top={2} right={10}>

                <DialogCloseButton onClick={handleClose} />

              </Box>
              <Typography
                align="center"

              >
                Create New Post
              </Typography>

            </DialogTitle>
            <Typography style={{ marginLeft: 15, }} color="textSecondary" variant="body4"><i>* required</i></Typography>
            <DialogContent>
              <div className={classes.avatarContainer}>

              </div>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  error={Boolean(errors.title)}
                  autoComplete="off"

                  fullWidth
                  id="title"
                  label="Role"
                  name="title"
                  onChange={handleTitle}
                  type="text"
                  value={title}
                  variant="outlined"


                />

                <TextField
                  className={classes.margin}
                  required
                  error={Boolean(errors.body)}
                  autoComplete="off"
                  multiline
                  fullWidth
                  id="body"
                  label="Description"
                  name="body"
                  onChange={handleBody}
                  type="text"
                  variant="outlined"
                  rows={5}
                  value={body}

                />


                <TextField
                  autoComplete="off"
                  fullWidth
                  id="requirements"
                  label="Requirements"
                  name="requirements"
                  onChange={handleRequirements}
                  type="text"
                  value={requirements}
                  variant="outlined"
                  rows={2}
                  multiline
                  className={classes.margin}
                  helperText="Copy of National ID,Tools e.t.c"
                />
                <Divider />

                {image.preview ? <> <img src={image.preview} style={{ marginTop: 5, marginLeft: 5, borderRadius: 5, marginBottom: 5, height: "50px", width: "50px" }} />
                  <IconButton onClick={removeImage} ><HighlightOffIcon style={{ color: 'red' }} /></IconButton></> : (

                  <> </> )}

                <label for="image" style={{ color: "#002884" }}>
                  <i> Add Photos</i>
                </label>
                <input
                  onChange={handleImage}
                  name="image"
                  id="image"
                  type="file"
                  capture="environment"
                  required
                  style={{ display: "none" }}
                />

                <IconButton color="primary"  id="image" onClick={handleImage} >
                  <AddPhotoAlternateIcon />
                </IconButton>
                <Divider />
                <br />



                <Button
                  fullWidth
                  size="large"
                  color="primary"
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  style={{ boxShadow: "none", borderRadius: "5px", }}
                >
                  <span className="nav-button-text">Post</span>

                  {loading && <CircularProgress />}
                </Button>


                <br />

              </form>
            </DialogContent>


          </Card>
        </Container>
        <DialogContentText>
          <Typography
            align="center"
            variant="body1"
            paragraph
            style={{ marginLeft: 2, fontFamily: "monospace", fontSize: "12px" }}
          >
            Moderated by admin.<Link>Learn more...</Link>
          </Typography>

        </DialogContentText>
      </Dialog>

    </>
  );
};

export default DialogPostForm;


//Create a learn more item