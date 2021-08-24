import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
//Material UI
import Typography from '@material-ui/core/Typography';
// Local
import { APP_NAME,route } from '../../constants';
import Header from '../Header';
import RecommendedUsers from '../RecommendedUsers';
import RecommendedPosts from '../RecommendedPosts';
import {
  getUnreadNotificationsCount,
  selectUnreadNotificationsCount,
} from '../../redux/notifications';

import useStyles from './styles';


const AuthLayout = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);

  React.useEffect(() => {
    if (!unreadNotificationsCount) {
      dispatch(getUnreadNotificationsCount());
    }
    const interval = setInterval(() => {
      dispatch(getUnreadNotificationsCount());
    }, 300000);

    return () => { clearInterval(interval); };
  }, []);

  return (
    <div className={classes.authLayout}>
      <div className={classes.headerContainer}>
        <Header />

      </div>
      <main className={classes.mainContainer}>
        {children}
      </main>
      <aside className={classes.asideContainer}>
        <RecommendedUsers />
        <RecommendedPosts />
        <Link to={route.team}> 
        <Typography align="center" style={{fontFamily:"monospace",fontSize:"10px"}}>
           Learn about {APP_NAME} LLC
        </Typography>
        </Link>
      </aside>

    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
