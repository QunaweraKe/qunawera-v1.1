import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';

// Material UI
import Typography from '@material-ui/core/Typography';
// Local
import AuthLayout from '../../components/AuthLayout';
import SubHeading from '../../components/SubHeading';
import Loading from '../../components/Loading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import NotificationItem from '../../components/NotificationItem';
import PageTitle from '../../components/PageTitle';
import Notification from '../../components/Files/Images/notification.svg';
import useUI from '../../hooks/useUI';

import {
  getNotifications,
  key,
  selectNotifications,
  selectUnreadNotificationsCount,
 
} from '../../redux/notifications';

const Notfications = () => {
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  const { loadingnotification } = useUI(key.removeAllNotification, null, false);
  const notifications = useSelector(selectNotifications);
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);

  const { fetched, loading, nextLoading } = useUI(
    key.notifications, key.notificationsNext,
  );

  React.useEffect(() => {
    if (unreadNotificationsCount > 0 || !fetched) {
      dispatch(getNotifications());
    }
  }, []);

  const handleNext = () => {
    dispatch(getNotifications(notifications.next));
  };

  const renderNotifications = () => {
    let renderedNotifications;
    if (loading) {
      renderedNotifications = <Loading />;
    } else if (notifications.results.length) {
      renderedNotifications = (
        notifications.results.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))
      );
    } else {
      renderedNotifications = (
        <NoData>

          <Typography
           
            variant="h6"
            color="primary"
            style={{fontFamily:"monospace"}}
          >
            You don&apos;t have any activities yet
          </Typography>
          <div style={{height:"250px",width:"250px",textAlign:"center",display:"inline-block"}}>
          <Notification/>
          <Typography
                  color="textSecondary"
                  style={{ fontWeight: "bolder" }}
                  variant="body"
                >
                  Your activities will show up here...
                </Typography>
          </div>
        
        </NoData>
      );
    }
    return renderedNotifications;
  };

  return (
    <>
      <PageTitle title="Activities" />

      <AuthLayout>
        <SubHeading>
          <MobileMenu />
          <Typography variant="h6" style={{fontWeight:"bolder",marginLeft:80}}>
            Activities
          </Typography>
        
        </SubHeading>
        {renderNotifications()}
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={notifications.next}
        />
      </AuthLayout>
    </>
  );
};

export default Notfications;
