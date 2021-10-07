import PropTypes from 'prop-types';
import React from 'react';

// Material UI
import TabbedNav from '../TabbedNav';
import TabbedNavItem from '../TabbedNavItem';

// Local
import { route } from '../../constants';
import { Typography } from '@material-ui/core';

const PostDetailNav = ({ active, postId }) => (
  <TabbedNav>
    <TabbedNavItem
      active={active === 'post'}
      to={route.postDetail(postId)}
    >
     <Typography style={{fontWeight:"bolder",fontSize:20,}}> Post & Comments</Typography>
    </TabbedNavItem>
  </TabbedNav>
);

PostDetailNav.propTypes = {
  active: PropTypes.oneOf(['post', 'likes']).isRequired,
  postId: PropTypes.string.isRequired,
};

export default PostDetailNav;
