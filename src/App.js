import React, { useState } from 'react';
import SearchInput from './components/search-input';
import SearchResults from './components/search-results';

import useFetch from './hooks/useFetch';

import './style.css';

export default function App() {
  const { data, setData } = useFetch();
  const { results, search } = data;
  const [dropDownStatus, setDropDownStatus] = useState(false);

  const onHideResultsHandler = event => {
    event.preventDefault();

    setDropDownStatus(false);
  };
  const onShowHandler = event => {
    event.preventDefault();

    setDropDownStatus(true);
  };

  const onSelectHandler = selected => {
    setData({ ...data, search: selected });

    setDropDownStatus(false);
  };

  const onChangeHandler = event => {
    console.log(event);
    event.preventDefault();

    const value = event.target.value;

    setData({ ...data, search: { ...search, name: value } });
  };

  return (
    <div className="app">
      <SearchInput
        id="searchInput"
        name="search"
        placeholder="Search"
        value={search.name}
        onChange={onChangeHandler}
        onBlur={onHideResultsHandler}
        onFocus={onShowHandler}
      />
      <SearchResults
        isHidden={!dropDownStatus}
        results={results}
        onSelect={onSelectHandler}
      />
    </div>
  );
}
