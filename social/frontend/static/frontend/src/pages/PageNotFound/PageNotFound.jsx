import React from 'react';

// Local
import PageTitle from '../../components/PageTitle';
import Error from '../../components/Files/Images/error404.svg';
import useStyles from './styles';

const PageNotFound = () => {
  const classes = useStyles();
  return(
  <>
    <PageTitle title="Page not found" />
    <div className={classes.errorimg}>
 <Error />
 </div>

  </>
);
};
export default PageNotFound;
