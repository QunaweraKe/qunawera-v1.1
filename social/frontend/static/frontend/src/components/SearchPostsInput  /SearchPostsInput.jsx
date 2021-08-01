import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
// Local
import { APP_NAME } from '../../constants';

import { getSearchPost, selectSearchString } from '../../redux/searchposts';

import useStyles from './styles';

const SearchPostsInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchString, setSearchString] = React.useState(
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

  return (
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
  );
};

export default SearchPostsInput;
