import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';

// Local
import Avatar from '../Avatar';
import CircularProgress from '../CircularProgress';

import useUI from '../../hooks/useUI';

import { createReply, key, selectReplies } from '../../redux/post';
import { selectUser } from '../../redux/user';

import useStyles from './styles';

const ReplyForm = ({ postId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const replies = useSelector((s) => selectReplies(s, postId));

  const [replyText, setReplyText] = React.useState('');

  const { loading } = useUI(key.reply(postId), null, false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReply(user.username, replyText, postId));
    setReplyText('');
  };

  const handleChange = (event) => {
    setReplyText(event.target.value);
  };

  return (
    <form
      className={classes.replyForm}
      onSubmit={handleSubmit}
      noValidate
    >


      <Avatar
        className={classes.avatar}
        user={user}
      />
      <Paper style={{padding:'0px',width:"100%"}} className={classes.backGround}>
      <TextField
        className={classes.textField}
        color="textSecondary"
        InputProps={{
        
          classes: { notchedOutline: classes.notchedOutline },
          className: classes.input,
          endAdornment: (
            <InputAdornment
              className={classes.adornment}
              position="end"
            >
              <IconButton
                color="textSecondary"
                disabled={loading || replyText.trim().length === 0}
                type="submit"
              >
                <SendIcon />
                {loading && <CircularProgress />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{style:{fontSize:13}}}
        label={
          replies.length
            ? 'What\'s your comment?'
            : 'Leave a comment'
        }
        multiline
        onChange={handleChange}
        spellCheck
        value={replyText}
        
      />
        </Paper>
    </form>
  );
};

ReplyForm.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default ReplyForm;