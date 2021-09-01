import React from 'react';

import './search-input.styles';

const SearchInput = ({ value, onChange, onBlur, onFocus, ...otherProps }) => {
  return (
    <div className="search-input__wrapper">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete="off"
        {...otherProps}
      />
      {value.length > 0 ? (
        <span htmlFor="searchInput" className="search-input__icon search-input__icon--close">
          &#x2715;
        </span>
      ) : (
        <span htmlFor="searchInput" className="search-input__icon">
          &#9662;
        </span>
      )}
    </div>
  );
};

export default SearchInput;
