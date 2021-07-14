import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
// Local
import { APP_NAME } from '../../constants';

import { getSearch, selectSearchString } from '../../redux/search';

import useStyles from './styles';

const SearchInput = () => {
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
      dispatch(getSearch(searchString));
    }, 250));
  }, [searchString]);

  const handleClear = () => {
    setSearchString('');
  };

  const handleInput = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <Paper className={classes.root}elevation={2}>
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
        placeholder={`Search ${APP_NAME} users...` }
        startAdornment={(
          <SearchIcon
            className={classes.searchIcon}
          />
          
        )}
        
        value={searchString}
      />
      </Paper>
    </div>
  );
};

export default SearchInput;
