import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import RefreshIcon from '@material-ui/icons/Refresh';

// Local
import Loading from '../Loading';
import RecommendedUsersItem from '../RecommendedUsersItem';
import ShowMoreRecommended from '../ShowMoreRecommended';
import NotAvailable from '../../components/Files/Images/notavailable.svg';
import { route } from '../../constants';

import useUI from '../../hooks/useUI';

import {
  key,
  getRecommendedUsers,
  selectRecommendedUsers,
} from '../../redux/recommended';

import useStyles from './styles';

const RecommendedUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector(selectRecommendedUsers);

  const { fetched, loading } = useUI(key.recommendedUsers);

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getRecommendedUsers());
    }
  }, []);

  const handleRefresh = () => {
    dispatch(getRecommendedUsers());
  };

  const renderUsersList = () => {
    let rendered;
    if (loading) {
      rendered = <Loading />;
    } else if (users.length) {
      rendered = (
        <>
          <List
            className={classes.list}
            disablePadding
          >
            {users.map((user) => (
              <RecommendedUsersItem
                key={user.id}
                user={user}
              />
            ))}
          </List>
          <ShowMoreRecommended to={route.recommendedUsers} />
        </>
      );
    } else {
      rendered = (
        <>
     
        <Typography
      paragraph
      color="textSecondary"
      align="center"
      style={{fontFamily:"monospace",fontSize:"12px"}}
      gutterbottom
        
      >
        You don&apos;t have any users at the moment.
      </Typography>
      <Typography
        paragraph
     
        color="textSecondary"
        align="center"
  
        style={{fontFamily:"monospace",fontSize:"12px"}}
        gutterbottom
        
      >
     Refresh later.
      </Typography>
      <Typography
          className={classes.noUsers}
        >
           <NotAvailable style={{width:"60%",height:"60%"}}/>
        </Typography>
      </>
      
      );
    }
    return rendered;
  };

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader
        action={(
          <IconButton
           size="small"
            className={classes.refreshButton}
            onClick={handleRefresh}
          >
            < RefreshIcon/>
          </IconButton>
        )}
        className={classes.cardHeader}
        title="Who You May Follow"
        titleTypographyProps={{
          className: classes.title,
          variant: 'subtitle3',
         
        }}
      />
      {renderUsersList()}
    </Card>
  );
};

export default RecommendedUsers;
