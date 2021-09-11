import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
import Card from '@material-ui/core/Card';
// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';
import DialogCloseButton from '../DialogCloseButton';
import useUI from '../../hooks/useUI';
import { isEmpty } from '../../utils';
import { createPost, key } from '../../redux/post';
import { selectUser } from '../../redux/user';

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
  const handleTitle = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { errors, loading } = useUI(key.createPost, null, false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("body", body);
      formData.append("title", title);
      formData.append("image", image.raw, image.name);
      dispatch(createPost(formData));
      setImage('');
      setTitle('');
      setBody('');
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
          <Button color="primary"

            aria-label="add"
            id="header-post-button"
            onClick={handleOpen}
            variant="outlined">
            <EditIcon />
          </Button>
        </CustomTooltip>
      </div>

      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}

      >
        {!isEmpty(errors)
          && (
            <Alert
              className={classes.alert}
              severity="error"
            >
              Form has invalid inputs.
            </Alert>
          )}
        <Container maxWidth="sm">
          <DialogTitle>
            <DialogCloseButton onClick={handleClose} />
            <Typography
              variant="h6"

            >
              Post a new task
            </Typography>

          </DialogTitle>

          <DialogContent>
            <div className={classes.avatarContainer}>
              <Avatar user={user} />
              <br/>
              <Typography variant="body4" style={{marginLeft:0}} color="textSecondary">*required</Typography>
            </div>

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
              rows={7}
              value={body}
            
            />


            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Upload Image
      </Button>
      <Dialog
        open={open}
        onClose={handleDialogClose}
   
      >
        <DialogContent>
          

              <label>
                {image.preview ? <img src={image.preview} style={{ marginTop: 5, marginLeft: 5, borderRadius: 5, marginBottom: 5, height: "150px", width: "150px" }} /> : (
                  <>
                    <Typography color="textSecondary" style={{ fontSize: 15 }} paragraph align="center" >Your upload will appear here... </Typography>
                  </>)}
              </label>  
          

<label className={classes.input}>
  <label for="upload file">
    </label>
            <input
              onChange={handleImage}
              name="image"
              id="image"
              type="file"
              capture="environment"
            required
            />

</label>
</DialogContent>
<Button
              size="large"
              color="primary"
              disabled={loading}
              onClick={handleDialogClose}
              variant="contained"
              className={classes.Button}
              style={{ boxShadow: "none", borderRadius: "5px", }}
            >
              <span className="nav-button-text">Use Currently selected</span>

              {loading && <CircularProgress />}
            </Button>
</Dialog>
      <label>
                {image.preview ? <img src={image.preview} style={{ marginTop: 5, marginLeft: 5, borderRadius: 5, marginBottom: 5, height: "150px", width: "150px" }} /> : (
                  <>
                    <Typography color="textSecondary" style={{ fontSize: 15 }} paragraph align="center" >Your upload will appear here... </Typography>
                  </>)}
              </label>  
            <br />
            <Button
              size="large"
              color="primary"
              disabled={loading}
              onClick={handleSubmit}
              variant="contained"
              style={{ boxShadow: "none", borderRadius: "5px", }}
            >
              <span className="nav-button-text">Post</span>

              {loading && <CircularProgress />}
            </Button>
            <Button
              className={classes.Button}
              color="textSecondary"
              disabled={loading}
              onClick={handleClose}
              size="large"
              variant="outlined"
              style={{ boxShadow: "none", borderRadius: "5px", }}
            >
              Cancel

            </Button>

          </DialogContent>
          <DialogContentText>
            <Typography
              align="center"
              variant="body1"
              paragraph
              style={{ fontFamily: "monospace", fontSize: "13px" }}
            >
              Remember this post will be moderated by admin.<Link>Learn more...</Link>
            </Typography>

          </DialogContentText>
        </Container>
      </Dialog>

    </>
  );
};

export default DialogPostForm;


//Create a learn more item