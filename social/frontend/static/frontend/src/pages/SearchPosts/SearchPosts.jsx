import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Typography from '@material-ui/core/Typography';

// Local
import AuthLayout from '../../components/AuthLayout';
import Heading from '../../components/Heading';
import MobileMenu from '../../components/MobileMenu';
import NextButton from '../../components/NextButton';
import NoData from '../../components/NoData';
import PageTitle from '../../components/PageTitle';
import SearchInput from '../../components/SearchInput';
import PostItem from '../../components/PostItem';
import useUI from '../../hooks/useUI';

import {
  getSearchPost,
  key,
  selectSearch,
  selectSearchString,
} from '../../redux/searchposts';

const Search = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const searchString = useSelector(selectSearchString);

  const { loading, nextLoading } = useUI(key.search, key.searchNext);

  const handleNext = () => {
    dispatch(getSearch(searchString, search.next));
  };

  const render = () => {
    let rendered;
    if (search.results.length) {
      rendered = <PostItem list={search.results} />;
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
      <PageTitle title="Home" />

      <AuthLayout>
        <Heading>
          <MobileMenu />
          <SearchInput />
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

export default Search;
