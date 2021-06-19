import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
// Local
import Avatar from '../Avatar';
import Loading from '../Loading';
import ShowMoreRecommended from '../ShowMoreRecommended';
import IndexImage2 from '../../components/Files/Images/notFound.svg';
import { route } from '../../constants';

import useUI from '../../hooks/useUI';

import {
  key,
  getRecommendedPosts,
  selectRecommendedPosts,
} from '../../redux/recommended';

import useStyles from './styles';

const RecommendedPosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const posts = useSelector(selectRecommendedPosts);

  const { fetched, loading } = useUI(key.recommendedPosts);

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getRecommendedPosts());
    }
  }, []);

  const handleRefresh = () => {
    dispatch(getRecommendedPosts());
  };

  const renderPostsList = () => {
    let rendered;
    if (loading) {
      rendered = <Loading />;
    } else if (posts.length) {
      rendered = (
        <>
        <Card classes={ classes.rootCard} style={{marginLeft:"5px",width:"95%"}}>
        <CardContent>
          <List
            className={classes.list}
            disablePadding
          >
            {posts.map((post) => (
              <ListItem
                alignItems="flex-start"
                key={post.id}
              >
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    user={post.author}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={post.author.display_name}
                  primaryTypographyProps={{
                    className: classes.displayName,
                    component: Link,
                    to: route.profilePosts(post.author.slug),
                  }}
                  secondary={post.body}
                />
                  <Divider />
              </ListItem>
              
            ))}
           
          </List>
          
          </CardContent>
          </Card>
          <ShowMoreRecommended to={route.recommendedPosts} />
        </>
      );
    } else {
      rendered = (
        <Typography
          className={classes.noPosts}
          color="textSecondary"
          variant="body2"
          justify="center"
        >
       <IndexImage2 style={{width:"60%",height:"60%"}}/>
        </Typography>
      );
    }
    return rendered;
  };

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader
        action={(
          <Button
            color="primary"
            className={classes.refreshButton}
            onClick={handleRefresh}
            variant="default"
            size="small"
          >
           <RefreshIcon />
          </Button>
        )}
        className={classes.cardHeader}
        title="Recently Tasks"
        titleTypographyProps={{
          className: classes.title,
          variant: 'subtitle3 ',
        }}
      />
      {renderPostsList()}
    </Card>
  );
};

export default RecommendedPosts;
