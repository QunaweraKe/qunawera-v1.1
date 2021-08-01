// Material UI
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { route } from '../../constants';
import {
  selectPost
} from '../../redux/post';
// Local
import Avatar from '../Avatar';
import DeletePost from '../DeletePost';
import LikePost from '../LikePost';
import PostHeader from '../PostHeader';
import PostParent from '../PostParent';
import useStyles from './styles';






const PostItemFeeds = ({ postId }) => {

  const classes = useStyles();
  const history = useHistory();

  const post = useSelector((s) => selectPost(s, postId));


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div className={classes.root}>


      <div className={classes.postContainer}
        style={{ backgroundColor: " #ffffe0", minWidth: 200, marginTop: "8px" }}>


        <div className={classes.avatarContainer}>

          <Avatar user={post.author} />

        </div>
        <div className={classes.post}>

          <PostHeader post={post} />

          <IconButton
            className={classes.postAction}
            onClick={handleMenuOpen}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',

            }}
            
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
          >

            <MenuItem
              onClick={() => (
                history.push(route.postDetail(post.id))
              )}
            >

              <ListItemText primary="View Details" className={classes.listItemSize} />
            </MenuItem>
            <Divider light />
            <MenuItem
              onClick={() => (
                history.push(route.profilePosts(post.author.slug))
              )}
            >

              <ListItemText primary="Author's Profile" className={classes.listItemSize} />

            </MenuItem>
            <Divider light />
            {post.is_author
              && (
                <DeletePost
                  setAnchorEl={setAnchorEl}
                  postId={post.id}
                  type="post"
                />
              )}

          </Menu>

          <div className={classes.text}>
            <Box display="flex" p={1} justifyContent='flex-start'>
              <Box p={0} >
                <Typography className={classes.postBody} variant="body8" style={{ fontSize: "12px", letterSpacing: '1px' }}>
                  {post.parent && <PostParent post={post.parent} />}
                </Typography>

                {post.body
                  && (
                    <>
                      <Link to={route.postDetail(post.id)} className={classes.Link} >
                        <Typography variant="body3" style={{ fontweight: "bold" }}>
                          {post.body.charAt(0).toUpperCase()}{post.body.slice(1)}

                        </Typography >

                      </Link>
                    </>
                  )}

              </Box>
              <Box p={0} justifyContent='flex-end' >
                <div >

                  <LikePost
                    postId={post.id}
                    size="default"
                    type="post"
                  />

                </div>
              </Box>
            </Box>
            {post.payment
              && (
                <>
                  <Divider light />
                  <Box display="flex" p={1} style={{ width: "100%" }}>
                    <Box p={1} flexGrow={1} >
                      <Typography className={classes.subtitle} variant="subtitle1" style={{ fontWeight: "bolder" }}>
                        Payment
                      </Typography>
                    </Box>
                    <Box p={0} >
                      <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                        ksh.{post.payment}
                      </Typography>

                    </Box>
                  </Box>



                </>
              )}
          </div>


        </div>

      </div>

      <Divider light />

      <Divider light classes={{ root: classes.divider }} style={{ height: "5px" }} />
    </div>
  );
};


export default PostItemFeeds;

//TODO: USER TYPING & floating action button
 //TODO: BID ONLY PARENT POST,ARRANGE CARD CONTENTS PROPERLY
 //semantic ui for items
 //start end payment location
//possible bug on reply item
//f&u link text for users