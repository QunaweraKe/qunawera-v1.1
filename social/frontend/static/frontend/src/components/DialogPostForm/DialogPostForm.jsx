import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


//DROPZONE JS
import Dropzone from "react-dropzone";
// Material UI
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
  const [image, setImage] = React.useState(null);
  const [body, setBody] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [fileNames, setFileNames] = React.useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));


  
  const handleImage = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    setImage(event.target.files[0]);
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



  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    try{
    const formData = new FormData();
    formData.append("body", body);
    formData.append("title", title);
    formData.append( "image",image, image.name);
    dispatch(createPost(formData));
    setImage('');
    setTitle('');
    setBody('');
    handleClose();
    return console.log("success")
  }catch(err){
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
          </div>
          <form onSubmit={handleSubmit}>
          <TextField
            required
            className={classes.inputContainer}
            error={Boolean(errors.title)}
            autoComplete="off"
          
            fullWidth
            id="title"
            label="Title"
            name="title"
            onChange={handleTitle}
            type="text"
            value={title}
            variant="filled"
            
            helperText="Indicate the job title i.e baby sitter"

          />
          <TextField
            required
            className={classes.inputContainer}
            error={Boolean(errors.body)}
            autoComplete="off"
            multiline
            fullWidth
            id="body"
            label="Description"
            name="body"
            onChange={ handleBody}
            type="text"
            variant="filled"
            rows={7}
            helperText="Include payment & skillset required for task"
            value={body}
          />


          <br />

          <Dropzone onDrop={handleDrop}  onChange={handleImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input  
             onChange={handleImage}
            name="image"
            id="image"
            type="file"
            {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
        


          <br />
          <Button
            size="large"
            color="primary"
            disabled={loading}
            type="submit"
            variant="contained"
            className={classes.Button}
            style={{boxShadow:"none",borderRadius:"5px",}}
          >
            <span className="nav-button-text">Submit</span>
       
            {loading && <CircularProgress />}
          </Button>
          <Button
            className={classes.Button}
            color="textSecondary"
            disabled={loading}
            onClick={handleClose}
            size="large"
            variant="outlined"

          >
            Cancel

          </Button>
          </form>
        </DialogContent>
        <DialogContentText>
          <Typography
           align="center"
           variant="body1"
           paragraph
          style={{ fontFamily: "monospace",fontSize:"10px" }}
          >
      Remember this post will be moderated by admin.<Link>Learn more...</Link>
          </Typography>

        </DialogContentText>
      </Dialog>
    </>
  );
};

export default DialogPostForm;


//Create a learn more item