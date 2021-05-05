import React from 'react';

// Local
import PageTitle from '../../components/PageTitle';
import Error from '../../components/Files/Images/error404.svg';

const PageNotFound = () => (
  <>
    <PageTitle title="Page not found" />
 <Error style={{height:"700px",width:"700px"}} />

  </>
);

export default PageNotFound;
