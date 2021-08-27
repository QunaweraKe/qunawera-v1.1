import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
// Local
import { APP_NAME } from '../../constants';
import AuthLayout from '../../components/AuthLayout';
import Heading from '../../components/Heading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';

import Posts from '../../components/Posts';
import useUI from '../../hooks/useUI';
import {
  getSearchPost,
  key,
  selectSearch,
  selectSearchString,
} from '../../redux/searchposts';
import useStyles from './styles';
import {  selectFeed } from '../../redux/post';


const SearchPosts = () => {
  const [searchString , setSearchString] = React.useState(
    useSelector(selectSearchString),
  );

  
  const [typingTimeout, setTypingTimeout] = React.useState(null);

  React.useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(setTimeout(() => {
      dispatch(getSearchPost(searchString));
    }, 250));
  }, [searchString]);

  const handleClear = () => {
    setSearchString('');
  };

  const handleInput = (event) => {
    setSearchString(event.target.value);
  };

  const dispatch = useDispatch();
  const classes = useStyles();
  const search = useSelector(selectSearch);
  const feed = useSelector(selectFeed);

  const { loading, nextLoading } = useUI(key.search, key.searchNext);

  const handleNext = () => {
    dispatch(getSearchPost(searchString, search.next));
  };

  const render = () => {
    let rendered;
    if (search.results.length) {
      rendered = <Posts posts={feed.results}/>;
    } else if (!loading) {
      rendered = (
        <NoData>
          <Typography
            paragraph
            variant="h6"
            color="secondary"
            style={{fontWeight:"bolder"}}
          >
            post &quot;
            {searchString}
            &quot;
            does not match our records
          </Typography>

        </NoData>
      );
    }
    return rendered;
  };

  return (
    <>
      <PageTitle title="Search posts" />

      <AuthLayout>
        <Heading>
          <MobileMenu />
          <div style={{width:"100%",backgroundColor:"#fff"}}>
      <Box  className={classes.root}p={0} flexGrow={1} >
      <InputBase
        classes={{
          input: classes.inputInput,
          root: classes.inputRoot,
        }}
        endAdornment={searchString.length
          ? (
            <Button
              color="primary"
              onClick={handleClear}
              size="small"
            > 
           <Divider className={classes.divider} orientation="vertical" />
               <span style={{marginLeft:"0px"}}><CloseIcon fontSize="medium" /></span>
            </Button>
          ) : null}
        onInput={handleInput}
        placeholder={`Search ${APP_NAME} posts...` }
        startAdornment={(
          <SearchIcon
            className={classes.searchIcon}
          />
          
        )}
        
        value={searchString}
      />
      </Box>
    </div>
        </Heading>
        {render()}
        <NextButton
          callback={handleNext}
          loading={nextLoading}
          nextUrl={search.next}
        />
      </AuthLayout>
    </>
  );
};

export default SearchPosts;
