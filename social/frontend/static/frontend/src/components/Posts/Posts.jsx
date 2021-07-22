import PropTypes from 'prop-types';
import React from 'react';

// Local
import SkeletonLoader from '../SkeletonLoader';

import PostItem from '../PostItem';

const Posts = ({ loading, posts, noData }) => {
  const render = () => {
    let rendered;
    if (loading) {
      rendered = <><SkeletonLoader /> <SkeletonLoader /></> ;
    } else if (posts.length) {
      rendered = (
        posts.map((postId) => (
          <PostItem
            key={postId}
            postId={postId}
          />
        ))
      );
    } else {
      rendered = noData;
    }
    return rendered;
  };

  return render();
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Posts;
