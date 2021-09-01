import React from 'react';
import classNames from 'classnames';

import './search-results.styles.scss';

const SearchResults = ({ results = [], onSelect, isHidden }) => (
  <div
    className={classNames('search-results', {
      'search-results--hidden': isHidden
    })}
  >
    {results.length > 0 ? (
      <ul className="search-results__list">
        {results.map((item, idx) => (
          <li
            className="search-results__item"
            key={idx}
            onClick={() => onSelect(item)}
          >
            {item.name}
            <img className="search-results__image" src={item.flag} />
          </li>
        ))}
      </ul>
    ) : (
      <div className="search-results__no-items">No Results</div>
    )}
  </div>
);

export default SearchResults;
