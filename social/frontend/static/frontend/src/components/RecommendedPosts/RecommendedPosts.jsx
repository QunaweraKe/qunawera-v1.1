import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
// Local
import Avatar from '../Avatar';
import Loading from '../Loading';
import ShowMoreRecommended from '../ShowMoreRecommended';
import NotAvailable from '../../components/Files/Images/notavailable.svg';
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
        <Card classes={ classes.rootCard} style={{color:"primary" ,marginLeft:"0%",width:"100%"}}>
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
                  secondary={post.body.length > 250 ?
                    `${post.body.substring(0, 250)}...` : post.body
                  }
                  secondaryTypographyProps={{
                    component: Link,
                    className: classes.displayPost,
                    to: route.postDetail(post.id),
                    
                  }}
                />
              
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
       <NotAvailable style={{width:"60%",height:"60%"}}/>
        </Typography>
      );
    }
    return rendered;
  };

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader
        action={(
          <IconButton
            color="primary"
            className={classes.refreshButton}
            onClick={handleRefresh}
            variant="default"
            size="small"
          >
           <AutorenewIcon />
          </IconButton>
        )}
        className={classes.cardHeader}
        title="Recent Posts"
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
