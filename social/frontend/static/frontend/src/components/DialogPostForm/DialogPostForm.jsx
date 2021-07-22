import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
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

  const imageRef = React.useRef();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { errors, loading } = useUI(key.createPost, null, false);
  const [formData, setFormData] = React.useState({
    body: '',
    payment: '',
    skillset: '',

  });


  const onChangePicture = (event, field) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append(field, image, image.name);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(formData));
    setFormData('');
    handleClose();
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
        <DialogTitle>
          <DialogCloseButton onClick={handleClose} />
          <Typography
            className={classes.title}
            variant="h6"
            style={{ fontWeight: "bold" }}
          >
            Post
          </Typography>

        </DialogTitle>
        <DialogContent>
          <div className={classes.avatarContainer}>
            <Avatar user={user} />
          </div>


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
            onChange={handleChange}
            type="text"
            value={formData.body}
            variant="filled"
            rows={4}
            helperText={errors.body}

          />




          <TextField
            className={classes.margin}
            error={Boolean(errors.skillset)}
            required
            autoComplete="off"
            multiline
            fullWidth
            id="skillset"
            label="Required Skills"
            name="skillset"
            onChange={handleChange}
            type="text"
            value={formData.skillset}
            variant="filled"
            rows={4}
            helperText={errors.skillset}
          />

          <TextField
            className={classes.margin}
            fullWidth
            required
            autoComplete="off"
            id="payment"
            label="Payment"
            name="payment"
            onChange={handleChange}
            type="text"
            value={formData.payment}
            variant="filled"
            helperText=" Ksh."
          />

          <br />
          <input
            onChange={onChangePicture}
            type="file"
            accept="image/*"
            name="image"
          />


          <br />
          <Button
            className={classes.Button}
            color="primary"
            disabled={loading}
            onClick={handleSubmit}
            size="large"
            variant="outlined"

          >
            Submit
            {loading && <CircularProgress />}
          </Button>
          <Button
            className={classes.Button}
            color="secondary"
            disabled={loading}
            onClick={handleClose}
            size="large"
            variant="outlined"

          >
            Cancel

          </Button>

        </DialogContent>

      </Dialog>
    </>
  );
};

export default DialogPostForm;
