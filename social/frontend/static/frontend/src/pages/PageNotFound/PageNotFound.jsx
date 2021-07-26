import React from 'react';

//MAT ui
import Card from  '@material-ui/core/Card';
import CardActions from  '@material-ui/core/CardActions';
// Local
import TextLink from '../../components/TextLink';
import PageTitle from '../../components/PageTitle';
import Error from '../../components/Files/Images/error404.svg';
import useStyles from './styles';
import { route} from '../../constants';
const PageNotFound = () => {
  const classes = useStyles();
  return(
  <>
    <PageTitle title="Page not found" />
    <div className={classes.errorimg}>
 <Error />
 <Card>
   Seems Like you are looking at a wrong page..
   <CardActions>
   <TextLink to={route.login}>  GO BACK!</TextLink>

   </CardActions>
 </Card>
 </div>

  </>
);
};
export default PageNotFound;
